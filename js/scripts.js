const crypt = new Map([ ['a', '._'], ['b', '_...'], ['c', '_._.'], ['d', '_..'], ['e', '.'], ['f', '.._.'], ['g', '__.'], ['h', '....'], ['i', '..'], ['j', '.___'], ['k', '_._'], ['l', '._..'], ['m', '__'], ['n', '_.'], ['o', '___'], ['p', '.__.'], ['q', '__._'], ['r', '._.'], ['s', '...'], ['t', '_'], ['u', '.._'], ['v', '..._'], ['w', '.__'], ['x', '_.._'], ['y', '_.__'], ['z', '__..'] ]);

const reversed = new Map(Array.from(crypt, a => a.reverse()));

function translateWord(word)
{
    word = word.toLowerCase();
    let firstletter = "";
    for(let i = 0; i < word.length; i++)
    {
        firstletter += crypt.get(word[i]);
        firstletter += " "
    }

    return firstletter;
}

function translateCode(word)
{
    let out = "";
    let arr = word.split(" ");
    for(let i = 0; i < arr.length; i++)
    {
        out += reversed.get(arr[i]);
    }

    return out;

}

function encWord()
{
    word = document.getElementById("inputWord").value;
    document.getElementById("outCode").value = translateWord(word); 
}

function encCode()
{
    word = document.getElementById("inputCode").value;
    document.getElementById("outWord").value = translateCode(word);
}