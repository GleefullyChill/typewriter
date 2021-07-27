const sentence = "hello there from lighthouse labs";
let timer = 100;
for (let i in sentence) {
  timer += 100
  setTimeout(() => {
      process.stdout.write(sentence[i]); 
  }, timer)
}