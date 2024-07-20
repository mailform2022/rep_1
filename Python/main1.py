# name = "User"
# print('Hello,', name)
# print('Привет мир!')
#
# age = 20
# print(age)
# print(type(age))

# a, b, c = 5, 7, 3
# summ = a + b + c
# mul = a * b * c
# average = summ/3
# print("Сумма: ", summ, "\nПроизведение", mul, "\nСреднее арифметическое", average)

# print(round(3.4789456, 2))

# a = input("Введите первую сторону: ")
# b = input("Введите вторую сторону: ")
# c = input("Введите третью сторону: ")
#
# if a == b == c:
#     print("Треугольник равносторонний")
# elif a == b or a == c or b == c:
#     print("Треугольник равнобедренный")
# else:
#     print("Треугольник разносторонний")


# month = int(input("Введите номер месяца: "))
#
# if 1 <= month <= 12:
#     if month == 12 or 1 <= month <= 2:
#         print("Зима")
#     elif 3 <= month <= 5:
#         print("Весна")
#     elif 6 <= month <= 8:
#         print("Лето")
#     elif 9 <= month <= 11:
#         print("Осень")
# else:
#     print("Такого месяца не существует!")


# a = int(input("Введите делимое: "))
# b = int(input("Введите делитель: "))
# print("На ноль делить нельзя!" if b == 0 else "Частное:", a // b)

# a = input("Введите первое число: ")
# b = input("Введите второе число: ")
#
# try:
#     in_a = int(a)
#     in_b = int(b)
#
# except ValueError:
#     print(a + b)
#
# else:
#     print(in_a + in_b)


# i = 0
#
# while i <= 20:
#     i += 1
#     if i % 2:
#         continue
#     print("i =", i)

# res = 1
# while True:
#     n = int(input("Введите число: "))
#     if n == 0:
#         break
#     res *= n
# print("Результат:", res)


# i = 1
# while i <= 9:
#     j = 1
#     while j <= 9:
#         print(i, " * ", j, " = ", i * j, end='\t\t')
#         j += 1
#     print()
#     i += 1


# for i in range(10, 100):
#     if i % 10 == i // 10:
#         print(i, " ", end=" ")


# a = int(input("Введите целое число: "))
# for i in range(1, a):
#     if a % i == 0:
#         print(i, end=" ")


# h = int(input("Введите высоту прямоугольника: "))
# l = int(input("Введите длину прямоугольника: "))
#
# for i in range(h):
#     print("*" * l)


# h = int(input("Введите высоту прямоугольника: "))
# l = int(input("Введите длину прямоугольника: "))
#
# for i in range(h):
#     for j in range(l):
#         if i == 0 or i == h - 1 or j == 0 or j == l - 1:
#             print("*", end="")
#         else:
#             print(" ", end="")
#     print()


# a = [int(input("=> ")) for i in range(int(input("Введите размер списка: ")))]
# print(a)
# res = 0
# for j in a:
#     if j < 0:
#         res += j
# print(res)


# n = list(range(21, 41))
# chet = 0
# summa = 0
# for i in n:
#     if i % 2 == 0:
#         chet += 1
#     else:
#         summa += i
# print("Количество чётных элементов списка:", chet)
# print("Сумма нечётных элементов:", summa)

# s = []
# n = int(input("Введите количество элементов списка: "))
# for i in range(n):
#     el = int(input("Введите число кратное 3: "))
#     if el % 3 == 0:
#         s.append(el)
#     else:
#         print(el, "не делится на 3 без остатка.")
# print(s)


# a = [1, 2, 3]
# b = [11, 22, 33]
# c = []
#
# for i in range(len(a)):
#     c.extend([a[i], b[i]])
# print(c)


# print("Введите элементы списка: ")
# n = [int(input("-> ")) for i in range(int(input("n = ")))]
# print("Введите индекс: ")
# k = int(input("k = "))
# n.pop(k)
# print(n)

# import random as r
# s = [r.randrange(100) for i in range(10)]
# print(s)
# m = max(s)
# s.remove(m)
# print("Max:", m)
# s.insert(0, m)
# print(s)


# def find_it(seq):
#     count = [0 for j in range(len(seq))]
#     seq2 = []
#     for i in range(len(seq)):
#         for r in range(i, len(seq)):
#             if seq[i] == seq[r]:
#                 count[i] += 1

#     print(count)
#     for k in range(len(count)):
#         if count[k] % 2:
#             seq2.append(count[k])
#
#
#     print(seq2)
#     maxcount = max(seq2)
#     print(seq[count.index(maxcount)])
#
#
# find_it([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -1, -1, -1 -2, 5])


# m = [
#     [1, 2, 3, 4],
#     [5, 6, 7, 8],
#     [9, 10, 11, 12]
# ]
#
# for i in m:
#     for j in i:
#         j = j ** 2
#         print(j, end="\t")
#     print()


# from random import randint as ran
#
# w, h = 3, 4
#
# m = [[ran(-20, 10) for x in range(w)] for y in range(h)]
# res = 0
# for i in m:
#     for j in i:
#         if j < 0:
#             res += 1
#         # j = j ** 2
#         print(j, end="\t\t")
#     print()
#     print(res)


# def print_1(a, b, c):
#     for i in range(c):
#         if i % 2 == 0:
#             print(a, end="")
#         else:
#             print(b, end="")
#
#
# print_1("X", "O", 5)

#
# a = int(input("Введите число a: "))
# b = int(input("Введите число b: "))


# def f(a1, b1):
#     if a1 > b1:
#         res = a1 - b1
#     else:
#         res = a1 + b1
#     print("Результат", res)
#
#
# f(a, b)

# import math
#
#
# def S(a, b=0, c=0):
#     if b and c:
#         print("Площадь треугольника:", 0.5 * a * b * math.sin(c))
#     elif b != c:
#         print("Площадь прямоугольника:", a * b)
#     elif b and c:
#         print("Площадь круга:", math.pi * math.pow(a, 2))
#
# def ch():
#     print("Выберите фигуру.")
#     cho = int(input("1 - треугольник, 2 - прямоугольник, 3 - круг: "))
#     if cho == 1:
#         a = int(input("Введите сторону a: "))
#         b = int(input("Введите сторону b: "))
#         c = int(input("Введите угол м/у a и b: "))
#         S(a, b, c)
#
#
# ch()


# def slicer(a, b):
#     start = 0
#     finish = 0
#     for i in range(len(a)):
#         if a[i] == b and start == 0:
#             start = i
#         elif a[i] == b and start != 0 and finish == 0:
#             finish = i
#     if start != 0 and finish != 0:
#         s = tuple(a[i] for i in range(start, finish + 1))
#         return s
#     elif start != finish:
#         s = tuple(a[i] for i in range(start, len(a)))
#         return s
#     else:
#         return tuple()


# print(slicer((1, 2, 3), 8))
# print(slicer((1, 8, 3, 4, 8, 8, 9, 2), 8))
# print(slicer((1, 2, 8, 5, 1, 2, 9), 8))


# def slicer(tpl, el):
#     if el in tpl:
#         if tpl.count(el) > 1:
#             first = tpl.index(el)
#             second = tpl.index(el, first + 1)
#             return tpl[first : second + 1]
#         else:
#             return tpl[tpl.index(el):]
#     else:
#         return ()
#
#
#
# print(slicer((1, 2, 3), 8))
# print(slicer((1, 8, 3, 4, 8, 8, 9, 2), 8))
# print(slicer((1, 2, 8, 5, 1, 2, 9), 8))


# import random as r


# def fill_tuple(flag=True):
#     if flag:
#         s = tuple(r.randint(0, 5) for i in range(10))
#         return s
#     else:
#         s = tuple(r.randint(-5, 0) for i in range(10))
#         return s
#
#
#
# s1 = fill_tuple()
# s2 = fill_tuple(flag=False)
# s3 = s1 + s2
# zero = s3.count(0)
#
# print(s1)
# print(s2)
# print(s3)
# print("0 =", zero)


# def to_set(el):
#     s = set(el)
#     return s, len(s)
#
#
# print(to_set("я обычная строка"))
# print(to_set([4, 5, 4, 6, 2, 9, 11, 3, 4, 2]))


# s1 = set("Hello")
# s2 = set("How are you")
# s3 = s1 & s2
# print(s3)


# mathem = {"Матвей", "Евгения", "Михаил", "Максим", "Наталья"}
# phizic = {"Максим", "Матвей", "Александр"}
# all_list = mathem | phizic
# print("Общий список:", all_list)
# phizic &= mathem
# print("Список призеров обеих олимипиад:", phizic)


# d = {"x1": 3, "x2": 7, "x3": 5, "x4": -1}
# mul = 1
# for i in d:
#     mul *= d[i]
# print(mul)


# x = {1: ["Core-i3-4330", 9, "4500"],
#      2: ["Core-i5-4670K", 3, "8500"],
#      3: ["AMD FX-6300", 6, "3700"],
#      4: ["Pentium G3220", 8, "2100"],
#      2: ["Core-i5-3450", 5, "6400"],
#      }
#
# def port():
#     for i in x:
#         print(f'{i}) {x[i][0]} - {x[i][1]} шт. по {x[i][2]} руб')
#
#
# port()
#
# while True:
#     j = int(input("№: "))
#     if j == 0 or j > len(x):
#         break
#     else:
#         x[j][1] += int(input("Количество: "))
#
#
# port()


# s = [
#     [0, 1], [2, 3], [4, 5]
#     ]
# d = dict(s)
# print(d)

# x = {"a": 1, "b": 2}
# y = {'b': 3, 'c': 4}
# z = {}
# z = x.copy()
# z.update(y)
# print(z)


# d = {'name': 'Kelly', 'age': 25, 'salary': 8000, 'city': 'New York'}
# s = dict()
# s['name'] = d.pop('name')
# s['salary'] = d.pop('salary')
# print(d)
# print(s)


# a = ['one', 1, 2, 3, 'two', 10, 20, 'three', 15, 36, 60, 'four', -20]
# d = dict()
# s = None
# for i in a:
#     if type(i) is str:
#         d[i] = []
#         s = i
#     else:
#         d[s].append(i)
# print(d)


# d = {
#     'John': {'N': 3056, 'S': 8463, 'E': 8441, 'W': 2694},
#     'Tom': {'N': 4832, 'S': 6786, 'E': 4737, 'W': 3612},
#     'Anne': {'N': 5239, 'S': 4802, 'E': 5828, 'W': 1859},
#     'Fiona': {'N': 3904, 'S': 3645, 'E': 8821, 'W': 24510}
# }
#
# Name = input('Введите имя: ')
# Reg = input('Введите регион: ')
# err = 'Ошибка ввода!'
# res = (d.get(Name, err)).get(Reg, err)
# print(res)

# print('Для редактирования, введите: ')
# NameW = input(' имя: ')
# RegW = input('и регион: ')
# resW = int(input("Ведите новое значение: "))
# d[NameW][RegW] = resW
# print(d[NameW])

# print(chr(83))


# def to_dict(*args):
#     # return {i: i for i in args}
#     return dict(zip(args, args))
#
# print(to_dict(1, 2, 3, 4))
# print(to_dict('grey', (2, 17), 3.11, -4))


# def func(*args):
#     a = sum(args)
#     b = len(args)
#     res = a / b
#     s = list()
#     for i in args:
#         if i < res:
#             s.append(i)
#     print(res)
#     return s
#
#
# print(func(1, 2, 3, 4, 5, 6, 7, 8, 9))
# print(func(3, 6, 1, 9, 5))

# d = {(input(f'Введите имя {i + 1}-го: ')): (int(input('Введите балл: '))) for i in range(int(input('Введите количество студентов: ')))}
# print(d)
# sum_1 = sum(d.values())
# res = round(sum_1/len(d))
# print(f'Средний бал {res}, студенты с баллом выше среднего: ')
# for k, j in d.items():
#     if j > res:
#         print(k)

# def func(city):
#     c = 0
#
#     def inner():
#         nonlocal c
#         c += 1
#         print(city, c)
#
#     return inner
#
#
# res1 = func("Москва")
# res1()
# res1()


# print((lambda x, y: x ** 2 + y ** 2)(2, 5))


# print((lambda x: lambda y: lambda z: x + y + z)(2)(4)(6))


# import math
#
# d = {
#     'circle': lambda r: print(f'Площадь окружности радиуса {r}:', math.pi * r**2),
#     'rectangle': lambda a, b: print(f'Площадь прямоугольника размером {a} * {b}:', a * b),
#     'trapezoid': lambda a, b, h: print(f'Площадь трапеции для a={a}, b={b}, h={h}:', (a + b) * h/2)
# }
#
# d['circle'](2)
# d['rectangle'](10, 13)
# d['trapezoid'](7, 5, 3)


# print((lambda a, b, c: (a if (a < c) else c) if (a < b) else (b if (b < c) else c))(9, 8, 5))


# S = 0


# l1 = [1, 2, 3]
# l2 = [4, 5, 6]
#
# print(list(map(lambda x, y: x + y, l1, l2)))


# from random import randint as r
#
# b = [r(1, 40) for i in range(10)]
#
# print(b)
# print('[10; 20] =', list(filter(lambda x: 10 <= x <= 20, b)))


# def multiply(b):
#     def arg_multiply(fn):
#         def wrap(a):
#             return fn(a) * b
#
#         return wrap
#
#     return arg_multiply
#
#
# @multiply(3)
# def return_num(num):
#     return num
#
#
# print(return_num(5))

# def decor(fn):
#     def wrap(*args):
#         s = fn(*args) / len(args)
#         print("Среднее арифметическое чисел ", *args, " = ", s)
#         return s
#
#     return wrap
#
#
# @decor
# def all_summ(*args):
#     a = sum(args)
#     print("Сумма чисел ", *args, " = ", a)
#     return a
#
#
# all_summ(2, 4, 6, 5)


print('Новый код!')
print('Ещё код!')