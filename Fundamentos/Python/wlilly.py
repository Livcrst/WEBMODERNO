def cont (n,lista):
    contador = 0
    for elemento in lista:
        if elemento == n:
            contador += 1
    return contador
    
def main (n):
    lista = []
    for item in range(1000):
        entrada = int(input())
        lista.append(entrada)
    return cont(n,lista)

print(main())


while True:
    pass