const text = document.getElementById("text")
const key = document.getElementById("key")
const encodeButton = document.getElementById("encode")
const decodeButton = document.getElementById("decode")
let answer = document.getElementById("answer")
let decodeKey = document.getElementById("decodeKey")

//===================================== encode value =======================================
const encode = {
    encode1 : {
        q : "a" ,w : "b" ,e : "c" ,r : "d" ,t : "e" ,
        y : "f" ,u : "g" ,i : "h" ,o : "i" ,p : "j" ,
        a : "k" ,s : "l" ,d : "m" ,f : "n" ,g : "o" ,
        h : "p" ,j : "q" ,k : "r" ,z : "s" ,x : "t" ,
        c : "u" ,v : "v" ,b : "w" ,n : "x" ,m : "y" ,l : "z",
        Q : "A" , W : "B" , E : "C" , R : "D" , T : "E" ,
        Y : "F" , U : "G" , I : "H" , O : "I" , P : "J" ,
        A : "K" , S : "L" , D : "M" , F : "N" , G : "O" ,
        H : "P" , J : "Q" , K : "R" , Z : "S" , X : "T" ,
        C : "U" , V : "V" , B : "W" , N : "X" , M : "Y" , L : "Z"
        
    },
    encode2 :{
        q : "p" ,w : "o" ,e : "i" ,r : "u" ,t : "y" ,
        y : "t" ,u : "r" ,i : "e" ,o : "w" ,p : "q" ,
        a : "l" ,s : "k" ,d : "j" ,f : "h" ,g : "g" ,
        h : "f" ,j : "d" ,k : "s" ,z : "a" ,x : "m" ,
        c : "n" ,v : "b" ,b : "v" ,n : "c" ,m : "x" ,l : "z",
        Q : "P" , W : "O" , E : "I" , R : "U" , T : "Y" ,
        Y : "T" , U : "R" , I : "E" , O : "W" , P : "Q" ,
        A : "L" , S : "K" , D : "J" , F : "H" , G : "G" ,
        H : "F" , J : "D" , K : "S" , Z : "A" , X : "M" ,
        C : "N" , V : "B" , B : "V" , N : "C" , M : "X" , L : "Z"
        
    },
    encode3 : {
        q : "m" ,w : "n" ,e : "b" ,r : "v" ,t : "c" ,
        y : "x" ,u : "z" ,i : "p" ,o : "o" ,p : "i" ,
        a : "u" ,s : "y" ,d : "t" ,f : "r" ,g : "e" ,
        h : "w" ,j : "q" ,k : "g" ,z : "f" ,x : "d" ,
        c : "s" ,v : "a" ,b : "h" ,n : "j" ,m : "k" ,l : "l",
        Q : "M" , W : "N" , E : "B" , R : "V" , T : "C" ,
        Y : "X" , U : "Z" , I : "P" , O : "O" , P : "I" ,
        A : "U" , S : "Y" , D : "T" , F : "R" , G : "E" ,
        H : "W" , J : "Q" , K : "G" , Z : "F" , X : "D" ,
        C : "S" , V : "A" , B : "H" , N : "J" , M : "K" , L : "L"

    },
    encode4 : {
        q : "t" ,w : "r" ,e : "e" ,r : "w" ,t : "q" ,
        y : "p" ,u : "o" ,i : "i" ,o : "u" ,p : "y" ,
        a : "l" ,s : "k" ,d : "j" ,f : "h" ,g : "a" ,
        h : "s" ,j : "d" ,k : "f" ,z : "g" ,x : "v" ,
        c : "c" ,v : "x" ,b : "z" ,n : "b" ,m : "n" ,l : "m",
        Q : "T" , W : "R" , E : "E" , R : "W" , T : "Q" ,
        Y : "P" , U : "O" , I : "I" , O : "U" , P : "Y" ,
        A : "L" , S : "K" , D : "J" , F : "H" , G : "A" ,
        H : "S" , J : "D" , K : "F" , Z : "G" , X : "V" ,
        C : "C" , V : "X" , B : "Z" , N : "B" , M : "N" , L : "M"

    },
    encode5 : {
        q : "z" ,w : "a" ,e : "q" ,r : "s" ,t : "x" ,
        y : "w" ,u : "e" ,i : "c" ,o : "d" ,p : "r" ,
        a : "f" ,s : "v" ,d : "b" ,f : "g" ,g : "t" ,
        h : "y" ,j : "n" ,k : "h" ,z : "u" ,x : "j" ,
        c : "m" ,v : "k" ,b : "o" ,n : "i" ,m : "l" ,l : "p",
        Q : "Z" , W : "A" , E : "Q" , R : "S" , T : "X" ,
        Y : "W" , U : "E" , I : "C" , O : "D" , P : "R" ,
        A : "F" , S : "V" , D : "B" , F : "G" , G : "T" ,
        H : "Y" , J : "N" , K : "H" , Z : "U" , X : "J" ,
        C : "M" , V : "K" , B : "O" , N : "I" , M : "L" , L : "P"

    }
} 
//====================================== decode value ======================================
const decode = {
    decode1 :{
        a:"q", b:"w", c:"e", d:"r", e:"t",
        f:"y", g:"u", h:"i", i:"o", j:"p",
        k:"a", l:"s", m:"d", n:"f", o:"g",
        p:"h", q:"j", r:"k", s:"z", t:"x",
        u:"c", v:"v", w:"b", x:"n", y:"m", z:"l",
        A:"Q", B:"W", C:"E", D:"R", E:"T",
        F:"Y", G:"U", H:"I", I:"O", J:"P",
        K:"A", L:"S", M:"D", N:"F", O:"G",
        P:"H", Q:"J", R:"K", S:"Z", T:"X",
        U:"C", V:"V", W:"B", X:"N", Y:"M", Z:"L"
    },
    decode2 : {
        p:"q", o:"w", i:"e", u:"r", y:"t",
        t:"y", r:"u", e:"i", w:"o", q:"p",
        l:"a", k:"s", j:"d", h:"f", g:"g",
        f:"h", d:"j", s:"k", a:"z", m:"x",
        n:"c", b:"v", v:"b", c:"n", x:"m", z:"l",
        P:"Q", O:"W", I:"E", U:"R", Y:"T",
        T:"Y", R:"U", E:"I", W:"O", Q:"P",
        L:"A", K:"S", J:"D", H:"F", G:"G",
        F:"H", D:"J", S:"K", A:"Z", M:"X",
        N:"C", B:"V", V:"B", C:"N", X:"M", Z:"L"
    },
    decode3 : {
        m:"q", n:"w", b:"e", v:"r", c:"t",
        x:"y", z:"u", p:"i", o:"o", i:"p",
        u:"a", y:"s", t:"d", r:"f", e:"g",
        w:"h", q:"j", g:"k", f:"z", d:"x",
        s:"c", a:"v", h:"b", j:"n", k:"m", l:"l",
        M:"Q", N:"W", B:"E", V:"R", C:"T",
        X:"Y", Z:"U", P:"I", O:"O", I:"P",
        U:"A", Y:"S", T:"D", R:"F", E:"G",
        W:"H", Q:"J", G:"K", F:"Z", D:"X",
        S:"C", A:"V", H:"B", J:"N", K:"M", L:"L"
    },
    decode4 : {
        t:"q", r:"w", e:"e", w:"r", q:"t",
        p:"y", o:"u", i:"i", u:"o", y:"p",
        l:"a", k:"s", j:"d", h:"f", a:"g",
        s:"h", d:"j", f:"k", g:"z", v:"x",
        c:"c", x:"v", z:"b", b:"n", n:"m", m:"l",
        T:"Q", R:"W", E:"E", W:"R", Q:"T",
        P:"Y", O:"U", I:"I", U:"O", Y:"P",
        L:"A", K:"S", J:"D", H:"F", A:"G",
        S:"H", D:"J", F:"K", G:"Z", V:"X",
        C:"C", X:"V", Z:"B", B:"N", N:"M", M:"L"
    },
    decode5 : {
        z:"q", a:"w", q:"e", s:"r", x:"t",
        w:"y", e:"u", c:"i", d:"o", r:"p",
        f:"a", v:"s", b:"d", g:"f", t:"g",
        y:"h", n:"j", h:"k", u:"z", j:"x",
        m:"c", k:"v", o:"b", i:"n", l:"m", p:"l",
        Z:"Q", A:"W", Q:"E", S:"R", X:"T",
        W:"Y", E:"U", C:"I", D:"O", R:"P",
        F:"A", V:"S", B:"D", G:"F", T:"G",
        Y:"H", N:"J", H:"K", U:"Z", J:"X",
        M:"C", K:"V", O:"B", I:"N", L:"M", P:"L"
    }
}
//==========================================================================================
function encoderText(text , key){
    let encodeText = "";
    let Text = text;
    for(let i = 0; i < key.length; i++){
        for(let char  = 0; char < Text.length; char++){
            if(text[char] in encode["encode" + key[i]]){
                encodeText += encode["encode" + key[i]][Text[char]];
            
            }
            else{
                encodeText += text[char]
            }
        };
        if(i < key.length - 1){
            Text = encodeText;
            encodeText = "";
        };
    };
    answer.innerText = "encode text : " + encodeText + ",\n\n " + "key for decode : " + key
};
//==========================================================================================
function decoderText(text, key){
    let decodeText = "";
    let Text = text;
    for(let i  = key.length - 1; i >= 0; i--){
        for(let char = 0; char < Text.length; char++){
            if(text[char] in decode["decode" + key[i]]){
                decodeText += decode["decode" + key[i]][Text[char]];
            }
            else{
                decodeText += text[char]
            };
        };
        if(i > 0){
            Text = decodeText;
            decodeText = "";
        };
    };
    answer.innerText = "decode text : " + decodeText
};

//==========================================================================================
encodeButton.onclick = function(){
    let encodeKey = "";
    function randomInt (min , max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    for(let i = 1; i <= 5; i++){
        let int = randomInt(1, 5);
        encodeKey += int.toString();
    }
    encoderText(text.value, encodeKey)
}
//==========================================================================================
decodeButton.onclick = function(){
    decoderText(text.value, key.value)
}