const imput = Number(prompt("Digite um numero para tabuada"))

let tabela = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`]

for (let index in tabela){
    console.log(`${Number(index)+1} X ${imput} = ${(Number(index)+1)*imput}`)
}
