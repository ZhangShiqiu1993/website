# -*- coding: utf-8 -*-
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect(('104.143.38.56', 8124))
# s.connect(('127.0.0.1', 9999))

print(s.recv(1024).decode('utf-8'))
data = raw_input()
while data != 'exit':
    s.send(data)
    print(s.recv(1024).decode('utf-8'))
    data = raw_input()
s.send(b'exit')
s.close()
