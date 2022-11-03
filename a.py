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

with open("entities.csv", encoding="cp932") as f:
    for v in csv.reader(f):
        print(f"<option value=\"{v[0]}\">{v[1]}</option>")

# with open("scripts/test.csv".format(), encoding="cp932") as f:
#     a = []
#     q = (100, 105)
#     for p in csv.reader(f):
#         a.append(p)
#     k = 0
#     for i, param in zip(range(q[0] - 1, q[1]), a[q[0] - 1:q[1]]):
#         k += int(param[1])
#     print(k, "peco2282")
# /summon minecraft:zombie ~ ~ ~ {CustomName:
# '{"text":"zon"}',Tags:[zz],CustomNameVisible:true,
# Invulnerable:true,Silent:true,NoGravity:true,
# Glowing:true,OnGround:true,Fire:0s,Air:0s,
# FallDistance:0.0f,PortalCooldown:0,LeftHanded:true,
# FallFlying:true,PersistenceRequired:true,
# CanPickUpLoot:true,NoAI:true,DeathTime:0s,
# Health:20.0f,AbsorptionAmount:0.0f,Attributes:[{
# Name:"generic.max_health",Base:20.0d},
# {Name:"generic.knockback_resistance",Base:0.0d},
# {Name:"generic.movement_speed",Base:0.25d},
# {Name:"generic.attack_damage",Base:1.0d},
# {Name:"generic.attack_knockback",Base:0.0d},
# {Name:"generic.armor",Base:0.0d},
# {Name:"generic.armor_toughness",Base:0.0d},
# {Name:"generic.follow_range",Base:32.0d},
# {Name:"zombie.spawn_reinforcements‌",Base:0.0d}]}

