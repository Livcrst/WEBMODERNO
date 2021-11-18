def cont (n,lista):
    contador = 0
    for elemento in lista:
        if elemento == n:
            contador += 1
    return contador

def criar():
    lista = []
    for item in range(1000):
        entrada = int(input())
        lista.append(entrada)
    return lista

    
while True:
    itens = criar()
    n = int(input())
    if n == -1:
        break
    else:
        contador = cont(n, itens)
        print('{} appeared {} times'.format(n,contador))




 