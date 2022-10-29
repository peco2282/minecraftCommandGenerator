# import csv
# from typing import List
#
# from bs4 import BeautifulSoup, Tag
#
# # url = "https://azurlane.wikiru.jp/index.php?%B7%D0%B8%B3%C3%CD%C9%BD"
# # r = requests.get(url)
#
# with open("k.html", mode="r", encoding="euc-jp") as f:
#     r = f.read()
#
# soup = BeautifulSoup(r, "html.parser")
# table: Tag = soup.select("table .ie5 .style_table")[3]
# td: List[Tag] = table.select("td")
# after_td = []
# tds = [None] * 125
# print(tds)
# for t in td:
#     if t.text != "":
#         after_td.append(t.text)
#
# after_tds = [
#     (
#         {
#             int(after_td[i]): tuple(after_td[i: i + 3])
#         }
#         # if int(after_td[i]) != 125
#         # else {125: [125, 0, 4545675]}
#     )
#     for i in range(0, len(after_td), 3)
# ]
# for t in after_tds:
#     tds[int(list(t.keys())[0]) - 1] = list(t.values())[0]
# print(tds)
#
# with open("scripts/test.csv", mode="w", encoding="cp932", newline="") as f:
#     for t in tds:
#         csv.writer(f).writerow(t)
import csv

with open("scripts/test.csv".format(), encoding="cp932") as f:
    a = []
    q = (100, 105)
    for p in csv.reader(f):
        a.append(p)
    k = 0
    for i, param in zip(range(q[0] - 1, q[1]), a[q[0] - 1:q[1]]):
        k += int(param[1])
    print(k, "peco2282")


