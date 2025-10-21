import os
import smtplib
from email.mime.text import MIMEText
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs

SMTP_HOST = os.getenv('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', '587'))
SMTP_USER = os.getenv('SMTP_USER', 'official.pythonworld@gmail.com')
SMTP_PASS = os.getenv('SMTP_PASS', 'zfys shhx ybfe hsxh')
SMTP_FROM_EMAIL = os.getenv('SMTP_FROM_EMAIL', SMTP_USER)
SMTP_FROM_NAME = os.getenv('SMTP_FROM_NAME', 'Devora')
SMTP_TO_EMAIL = os.getenv('SMTP_TO_EMAIL', 'devoraofficial11@gmail.com')

class Handler(BaseHTTPRequestHandler):
    def _set_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'text/plain; charset=utf-8')
        # Allow simple CORS if needed
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers(204)

    def do_POST(self):
        if self.path != '/contact':
            self._set_headers(404)
            self.wfile.write(b'Not Found')
            return
        try:
            length = int(self.headers.get('Content-Length', '0'))
            body = self.rfile.read(length).decode('utf-8')
            data = parse_qs(body)
            name = (data.get('name', [''])[0]).strip()
            email = (data.get('email', [''])[0]).strip()
            subject = (data.get('subject', [''])[0]).strip() or 'New Contact Form Submission'
            message = (data.get('message', [''])[0]).strip()

            text = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}\n"
            msg = MIMEText(text, _charset='utf-8')
            msg['Subject'] = subject
            msg['From'] = f"{SMTP_FROM_NAME} <{SMTP_FROM_EMAIL}>"
            msg['To'] = SMTP_TO_EMAIL
            if email:
                msg['Reply-To'] = email

            with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
                server.ehlo()
                server.starttls()
                server.login(SMTP_USER, SMTP_PASS)
                server.sendmail(SMTP_FROM_EMAIL, [SMTP_TO_EMAIL], msg.as_string())

            self._set_headers(200)
            self.wfile.write(b'OK')
        except Exception:
            self._set_headers(200)
            self.wfile.write(b'OK')

if __name__ == '__main__':
    port = int(os.getenv('PORT', '8000'))
    httpd = HTTPServer(('0.0.0.0', port), Handler)
    print(f"Mail server running on port {port}")
    httpd.serve_forever()
