import subprocess
a = subprocess.run(['node', 'boundaryCheck.js','lat','lng'], stdout=subprocess.PIPE).stdout.decode('utf-8')
print (a)