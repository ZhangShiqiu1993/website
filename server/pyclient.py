# -*- coding: utf-8 -*-
import socket

#创建一个socket
#AF_INET指定使用IPv4协议
#如果要用的IPv6，就指定为AF_INET6
#SOCK_STREAM指定使用面向流的TCP协议
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 建立连接
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
