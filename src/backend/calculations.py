import math

    
def parenthesisCalculation(value):
    i = 0
    parenthesisCount = 0
    while (i < len(value)):
        if (value[i].startswith('R') or value[i].startswith('Q')):
            value[i] = value[i][0] + calculation(value[i][1:len(value[i])])
        i = i + 1

    parenthesisCount = 0
    parenthesis = False
    index = 0
    tempOper = []
    tempVal = []
    i = 0
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
    while (i < len(value)):
        if (value[i].startswith('R')):
            value[i] = str(math.sqrt(float(value[i][1:len(value[i])])))
        elif (value[i].startswith('Q')):
            value[i] = str(math.pow(float(value[i][1:len(value[i])]), 2))
        i = i + 1

    i = 0
    while(i < len(value)):
        if (value[i] == "*"):
            value[i] = str(float(value[i-1]) * float(value[i+1]))
            value.pop(i-1)
            value.pop(i)
            i = i - 1
        elif(value[i] == "/"):
            value[i] = str(float(value[i-1]) / float(value[i+1]))
            value.pop(i-1)
            value.pop(i)
            i = i - 1
        i = i + 1

    i = 0
    while(i < len(value)):
        if (value[i] == "+"):
            value[i] = str(float(value[i-1]) + float(value[i+1]))
            value.pop(i-1)
            value.pop(i)
            i = i - 1
        elif(value[i] == "-"):
            value[i] = str(float(value[i-1]) - float(value[i+1]))
            value.pop(i-1)
            value.pop(i)
            i = i - 1    
        i = i + 1
    return value[0]


def calculation(value):
    operations = []
    temp = ""
    i = 0
    closeParenthesis = False
    while (i < len(value)):
        if (value[i].isdigit() or value[i].isalpha() or value[i] == '.'):
            temp = temp + value[i]
            if (value[i].isalpha()):
                parenthesisCount = 1
                temp = temp + value[i+1]
                i = i + 2
                while (parenthesisCount >= 1):
                    if (value[i] == '('):
                        parenthesisCount = parenthesisCount + 1
                    elif (value[i] == ')'):
                        parenthesisCount = parenthesisCount - 1
                    temp = temp + value[i]
                    i = i + 1
                i = i - 1
        elif ((value[i] == '+' or value[i] == '-' or value[i] == '*' or value[i] == '/') and not closeParenthesis):
            operations.append(temp)
            operations.append(value[i])
            temp = ""
        elif((value[i] == '+' or value[i] == '-' or value[i] == '*' or value[i] == '/') and closeParenthesis):
            operations.append(value[i])
            closeParenthesis = False
        elif (value[i] == ')'):
            operations.append(temp)
            operations.append(value[i])
            temp = ""
            closeParenthesis = True
        else:
            operations.append(value[i])
        i = i + 1
    if (len(temp) != 0):
        operations.append(temp)
        temp = ""
    
    return parenthesisCalculation(operations)

def main():
    print(calculation("20+(R(16+9)+(10+23.263*50))"))

if __name__ == "__main__":
    main()
