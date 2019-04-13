import csv
#date=session['Te'][6:10]+session['Te'][3:5]+session['Te'][0:2]+"-12:00"
#date='20160101'
def kavishi(date):
    x=0
    with open('C:/Users/Lenovo/Desktop/Udemy Flask cource/Dabba0/tempvalues.csv', 'r') as csvfile:
        csvreader=csv.reader(csvfile,delimiter=' ')
        k=1
        for r in csvreader:
            if date in r[0]:
                x=r
                break
            else:
                print(r[0])
            k+=1
            if k==5:
                break
    temp=str(x).split(",")[-1][0:2]
    return temp
