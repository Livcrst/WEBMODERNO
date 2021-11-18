contador = 0

while True:
    n = int(input())
    if n == -1:
        break
    else:
        for i in range(10):
            entrada = int(input())
            if entrada == n:
                contador += 1
        print('{} appeared {} times'.format(n,contador))
        contador = 0

