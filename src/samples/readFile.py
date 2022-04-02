crimefile = open('./playlists_copy.js', 'r')
yourResult = [line.split(',') for line in crimefile.readlines()]
print(yourResult)
for line in yourResult:
    print(line)

# file1 = open('write_to_file', 'w')
# file1.write(str(yourResult))