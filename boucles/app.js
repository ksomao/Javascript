for (i = 0; i <= 20; i++) {
    if (i % 2 == 0)
        console.log(i + " pair");
    else
        console.log(i + " impair");
}

for (i = 0; i <= 10; i++) {
    console.log(i + " * 9 = " + i * 9 + "\n");
}


for (i = 0; i <= 100; i++) {
    if (i > 90)
        console.log(`Pour ${i} points vous avez le grade A`);
    else if (i > 80)
        console.log(`Pour ${i} points vous avez le grade B`);
    else if (i > 70)
        console.log(`Pour ${i} points vous avez le grade C`);
    else if (i > 65)
        console.log(`Pour ${i} points vous avez le grade D`);
    else
        console.log(`Pour ${i} points vous avez le grade F`);
}

for (i = 1; i <= 5; i++) {
    for (j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}