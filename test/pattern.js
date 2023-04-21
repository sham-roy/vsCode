limit = 5
for (i = 1; i < 5; i++) {
    s = ""
    for (j = 1; j <= limit; j++) {
        s += " "
    }
    limit--
    for (k = 1; k <= i; k++) {
        if (i == 3 && k == 2) {
            s += "  "
            continue
        }
        s += "* "
    }

    console.log(s);
}
for (i = 3; i >= 0; i--) {
    s = " "
    for (j = 1; j <= limit; j++) {
        s += " "
    }
    limit++
    for (k = 1; k <= i; k++) {
        if (i == 3 && k == 2) {
            s += "  "
            continue
        }
        s += " *"
    }

    console.log(s);
}