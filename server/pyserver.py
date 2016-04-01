# -*- coding: utf-8 -*-
import socket
import threading
import time

def tcplink(sock, addr):
    
    sock.send(b"welcome!")
    while True:
        data = sock.recv(1024)
        time.sleep(1)
        if not data or data.decode('utf-8') == 'exit':
            break
        text = ("Hello, %s! " % data.decode('utf-8')).encode('utf-8')
        sock.send("Client: "+text)
        print("Server: "+text)
    sock.close()
    print('Connection from %s:%s closed.' % addr)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#绑定监听的地址和端口
s.bind(('0.0.0.0',9999))


#开始监听,最大连接数5
s.listen(5)

while True:
    # 接受一个新连接:
    sock, addr = s.accept()
    # 创建新线程来处理TCP连接:
    t = threading.Thread(target=tcplink, args=(sock,addr))
    t.start()
