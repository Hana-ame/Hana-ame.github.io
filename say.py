# encoding:utf8

import os

s = input()
while s:
    cmd = (f'bash say.sh {s}')
    print(cmd)
    os.system(cmd)
    s = input()

cmd = (f'bash say.sh {s}')
print(cmd)
os.system(cmd)
