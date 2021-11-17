contador = 0

while True:
    n = int(input('testando: '))
    if n == -1:
        break
    else:
        for i in range(1000):
            entrada = int(input())
            if entrada == n:
                contador += 1
        print('{} appered {} times'.format(entrada,contador))

