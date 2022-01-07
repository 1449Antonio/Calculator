
def parenthesisCalculation(value):
    index = 0
    i = 0
    tempOper = []
    tempVal = []
    parenthesisCount = 0
    parenthesis = False
    while (i < len(value)):
        if(parenthesis):
            if (value[i] == ")" and parenthesisCount == 0):
                parenthesis = False
                value[i] = parenthesisCalculation(tempOper)
                tempVal.extend(value[0:index])
                tempVal.extend(value[i:len(value)])
                value.clear()
                value.extend(tempVal)
                tempVal.clear()
                i = index
                tempOper.clear()
            elif (value[i] == ")" and parenthesisCount != 0):
                parenthesisCount = parenthesisCount - 1
                tempOper.append(value[i])
            elif (value[i] == "("):
                parenthesisCount = parenthesisCount + 1
                tempOper.append(value[i])
            else:
                tempOper.append(value[i])
        elif (value[i] == "("):
            index = i
            parenthesis = True
        i = i + 1

    i = 0
    while(i < len(value)):
        if (value[i] == '*'):
            value[i] = str(float(value[i-1]) * float(value[i+1]))
            value.pop(i-1)
            value.pop(i)
            i = i - 1
        elif(value[i] == '/'):
            value[i] = str(float(value[i-1]) / float(value[i+1]))
            value.pop(i-1)
            value.pop(i)
            i = i - 1
        i = i + 1

    i = 0
    while(i < len(value)):
        if (value[i] == '+'):
            value[i] = str(float(value[i-1]) + float(value[i+1]))
            value.pop(i-1)
            value.pop(i)
            i = i - 1
        elif(value[i] == '-'):
            value[i] = str(float(value[i-1]) - float(value[i+1]))
            value.pop(i-1)
            value.pop(i)
            i = i - 1    
        i = i + 1
    return value[0]


def calculation(value):
    operations = []
    temp = ""
    num = 0
    closeParenthesis = False
    for i in value:
        if (i.isdigit() or i.isalpha() or i == '.'):
            temp = temp + i
        elif ((i == '+' or i == '-' or i == '*' or i == '/') and not closeParenthesis):
            operations.append(temp)
            operations.append(i)
            temp = ""
        elif((i == '+' or i == '-' or i == '*' or i == '/') and closeParenthesis):
            operations.append(i)
            closeParenthesis = False
        elif (i == ')'):
            operations.append(temp)
            operations.append(i)
            temp = ""
            closeParenthesis = True
        else:
            operations.append(i)
    if (len(temp) != 0):
        operations.append(temp)
        temp = ""
    
    print(parenthesisCalculation(operations))

def main():
    calculation("20+(5+10*123-(123+4)*(145-123)/12)")

if __name__ == "__main__":
    main()
