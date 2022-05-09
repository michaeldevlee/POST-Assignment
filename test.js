const string_object = {
    string_to_cut : "iamyourlyftdriver"
}

const removeEveryThird = (str_obj) => {
	const str_array = str_obj.string_to_cut.split(" ");
  let counter = 0;
    for (let i in str)
    {
    counter++;
    if (counter > 2){
    	str.splice(i, 1)
      counter = 0;
    	}
    }
}

removeEveryThird(string_object)
