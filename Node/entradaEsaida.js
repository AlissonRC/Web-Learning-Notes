const anonimo = process.argv.indexOf("-a") !== -1;
console.log(anonimo);

if (anonimo) {
  process.stdout.write("Anonimo !\n");
  process.exit();
} else {
  process.stdout.write("informe seu nome:");
  process.stdin.on("data", (data) => {
    const nome = data.toString().replace("\n", "");
    process.stdout.write(`Nome: ${data}\n`);
    process.exit();
  });
}
