import base64

def decode(a):
    a = a+"==="
    base64_bytes = a.encode('ascii')
    message_bytes = base64.b64decode(base64_bytes)
    return message_bytes.decode('ascii')

text = open("text.txt","r",encoding="utf8").read()

heads = eval(open("heads.js","r",encoding="utf8").read())

owners = ["LeoTheRavioli","instinct","RyanUwU","Runaiic","courteously","nsap","Runaiic","M-Seven","IllagerCaptain","DogeisCut","Panther","LeiCha","MadetheMeep","TB40"]

def save():
    savefile = open("heads.js","w",encoding="utf8")
    savefile.write(str(heads))
    savefile.close()

##text = open("foundheads.txt","r",encoding="utf8").read()
##for line in text.splitlines():
##    file = line.split(": ",1)[0]
##    name = line.split(": ",1)[1]
##    heads[file] = name
##save()
##input()

for t in text.split('{textures: [{Value: "')[1:]:
    owner = None
    for o in owners:
        if o.lower() in t.split(", {Slot:",1)[0].lower():
            owner = o
            break
    encoded = t.split('"',1)[0]
    nbt = decode(encoded)
    url = nbt.replace("url:",'"url":').split('"url":"',1)[1].split('"',1)[0]
    file = url.split("wp-content/uploads/",1)[1]
    if file in heads: continue
    name = file.rsplit(".",1)[0]
    if not owner == None: name = name+" ("+owner+")"
    heads[file] = name
save()

