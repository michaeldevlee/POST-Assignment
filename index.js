const express = require ("express");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static('public'))
app.use(express.json());

app.get('/test', (req,res)=> {
    res.send('Please enter your string');
    console.log('GOT THE GET')
})

app.post('/test', (req,res)=> {
    const removeEveryThird = (str_obj) => {
        const str_array = str_obj.string_to_cut.split("");
        const divisions = Math.floor(str_array.length/3)
        const third_letters = []

        for (let i = 1; i < divisions+1; i++){
            third_letters.push(str_array[(i*3)-1])
        }
        
        const new_str_array = {
            "return_string" : third_letters.join("")
        }

        console.log(new_str_array.return_string)
        console.log(new_str_array)

        return new_str_array
    }

    res.json(removeEveryThird(req));
    res.end();
})

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));