# print('Hello World!')
# print("Привет мир")
# a = 5
# b = 7
# c = 3
# print("Сумма: " + str(a+b+c))
# print("Произведение: " + str(a*b*c))
# print("Среднее арифметическое " + str((a+b+c)//3))

# -----------------Домашнее задание-----------------

# Способ №1:

# a = 1
# b = 2
# a, b = b, a
# print(a)
# print(b)
#
#
# # Способ №2:
#
# a = 1
# b = 2
# a = a + b
# b = a - b
# a = a - b
# print(a)
# print(b)
#
# # Способ №3:
#
# a = 1
# b = 2
# a = a * b
# b = a // b
# a = a // b
# print(a)
# print(b)


# a = int(input("Введите первую сторону: "))
# b = int(input("Введите вторую сторону: "))
# c = int(input("Введите третью сторону: "))
#
# if a == b == c:
#     print("Треугольник равносторонний")
# elif a == b or b == c or a == c:
#     print("Треугольник равнобедренный")
# else:
#     print("Треугольник разносторонний")

num = int(input("Введите номер месяца: "))
if num == 1 or num == 2 or (num ==12):
    print("Зима")
if 3 <= num <= 5:
    print("Весна")
if 6 <= num <= 8:
    print("Лето")
if 9 <= num <= 11:
    print("Осень")
else:
    print("Такого года не существует")