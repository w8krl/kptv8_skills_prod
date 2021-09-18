/* eslint-disable no-console */
let data = {
  "treeHeaderData": {
      "Header": "root",
      "accessor": "root",
      "skill_item": null,
      "columns": [
          {
              "Header": "Network Design / Planning",
              "accessor": "L1_38",
              "skill_item": "root",
              "columns": [
                  {
                      "Header": "Field",
                      "accessor": "L2_121",
                      "skill_item": "L1_38"
                  },
                  {
                      "Header": "RAN",
                      "accessor": "L2_122",
                      "skill_item": "L1_38"
                  },
                  {
                      "Header": "Core",
                      "accessor": "L2_123",
                      "skill_item": "L1_38"
                  },
                  {
                      "Header": "Transport",
                      "accessor": "L2_124",
                      "skill_item": "L1_38"
                  }
              ]
          },
          {
              "Header": "Build & Delivery",
              "accessor": "L1_39",
              "skill_item": "root"
          },
          {
              "Header": "Service Operations / Assurance",
              "accessor": "L1_40",
              "skill_item": "root"
          },
          {
              "Header": "NPO",
              "accessor": "L1_41",
              "skill_item": "root"
          },
          {
              "Header": "PMO",
              "accessor": "L1_42",
              "skill_item": "root"
          }
      ]
  },
  "matrixData": [
      {
          "name": "Karl Webster",
          "skill_item": "L3_322"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_323"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_324"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_325"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_326"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_327"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_328"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_329"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_330"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_331"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_332"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_333"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_334"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_335"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_336"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_337"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_338"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_339"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_340"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_341"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_342"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_343"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_344"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_345"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_346"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_347"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_348"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_349"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_350"
      },
      {
          "name": "Karl Webster","skill_item": "L3_351"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_352"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_353"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_354"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_355"
      },
      {
          "name": "Karl Webster",
          "skill_item": "L3_413"
      }
  ]
}

data = data.matrixData;



const distNames = [...new Set(data.map(item => item.name))];

//For each name
let userArr = [];

for (const name of distNames) {  
  let userObj = {};
  userObj['name'] = name
  // For data records
  for (const [key, item] of Object.entries(data)) {
    if (item.name === name){
      userObj[item.skill_item] = "Y"

    }
  }
  userArr.push(userObj);

}


console.log(userArr);





var testData = {
  "treeHeaderData": {
      "Header": "root",
      "accessor": "root",
      "parent": null,
      "columns": [
          {
              "Header": "Network Design / Planning",
              "accessor": "L1_38",
              "parent": "root",
              "columns": [
                  {
                      "Header": "Field",
                      "accessor": "L2_121",
                      "parent": "L1_38"
                  },
                  {
                      "Header": "RAN",
                      "accessor": "L2_122",
                      "parent": "L1_38"
                  },
                  {
                      "Header": "Core",
                      "accessor": "L2_123",
                      "parent": "L1_38"
                  },
                  {
                      "Header": "Transport",
                      "accessor": "L2_124",
                      "parent": "L1_38"
                  }
              ]
          },
          {
              "Header": "Build & Delivery",
              "accessor": "L1_39",
              "parent": "root"
          },
          {
              "Header": "Service Operations / Assurance",
              "accessor": "L1_40",
              "parent": "root"
          },
          {
              "Header": "NPO",
              "accessor": "L1_41",
              "parent": "root"
          },
          {
              "Header": "PMO",
              "accessor": "L1_42",
              "parent": "root"
          }
      ]
  },
  "data": [
      {
          "name": "Abdul Haleem"
      },
      {
          "name": "Abdul Syed"
      },
      {
          "name": "Abdul Younus Mohammad"
      },
      {
          "name": "Abid Mahmood Burki"
      },
      {
          "name": "Adam Sumpter"
      },
      {
          "name": "Ade Leehum"
      },
      {
          "name": "Adebayo Ibrahim Aderonmu"
      },
      {
          "name": "Adeleke Hassan"
      },
      {
          "name": "Adina Boardman"
      },
      {
          "name": "Adrian Negrila"
      },
      {
          "name": "Adriana Stoica"
      },
      {
          "name": "Agnelo Dasilva"
      },
      {
          "name": "Ahmad Adeel"
      },
      {
          "name": "Ahmed Jawad"
      },
      {
          "name": "Akhil Kumar"
      },
      {
          "name": "Akilan Ratnagopal"
      },
      {
          "name": "Akram Tamimi"
      },
      {
          "name": "Alan Chan"
      },
      {
          "name": "Alex Deverill"
      },
      {
          "name": "Alex Freitas"
      },
      {
          "name": "Alex Taylor"
      },
      {
          "name": "Alex Xia"
      },
      {
          "name": "Alexandru Popa"
      },
      {
          "name": "Ali Rashid"
      },
      {
          "name": "Ali Raza"
      },
      {
          "name": "Ali Tawfik"
      },
      {
          "name": "Alin Olteanu"
      },
      {
          "name": "Altaf Ahmed"
      },
      {
          "name": "Amanulla Mohammed"
      },
      {
          "name": "Andrei Nedelcu"
      },
      {
          "name": "Andrew Adams"
      },
      {
          "name": "Andrew Barnard"
      },
      {
          "name": "Andrew Cawley"
      },
      {
          "name": "Andrew Dodds"
      },
      {
          "name": "Andrew Freeman"
      },
      {
          "name": "Andrew Phillip Thomas"
      },
      {
          "name": "Andrew Rothwell"
      },
      {
          "name": "AndrewÿColyer"
      },
      {
          "name": "Angela Gwenlan"
      },
      {
          "name": "Angela Zixuan Wang"
      },
      {
          "name": "Anthony Charles Gorvin"
      },
      {
          "name": "Anthony Downs"
      },
      {
          "name": "Anthony Rogers"
      },
      {
          "name": "Anthony Vernon"
      },
      {
          "name": "Antonio Ascensao Monteiro"
      },
      {
          "name": "Anwar Khan"
      },
      {
          "name": "Asam Kiani "
      },
      {
          "name": "Ashish Kumar"
      },
      {
          "name": "Atheer Khalil"
      },
      {
          "name": "Atif Khan"
      },
      {
          "name": "Ayan Mitra"
      },
      {
          "name": "Azharudeen Jinnah"
      },
      {
          "name": "Bahar Baykara"
      },
      {
          "name": "Balwinder Bangar"
      },
      {
          "name": "Ben Reeve"
      },
      {
          "name": "Bill Thorpe"
      },
      {
          "name": "Binny Zutshi"
      },
      {
          "name": "Brad Steele"
      },
      {
          "name": "Brendan Bowler"
      },
      {
          "name": "Carl Hamnett "
      },
      {
          "name": "Carl Murr"
      },
      {
          "name": "Charlotte Uwase"
      },
      {
          "name": "Chris Gibson"
      },
      {
          "name": "Chun Li"
      },
      {
          "name": "Clayton Mutambudzi"
      },
      {
          "name": "Colin Brown"
      },
      {
          "name": "Colin Whelan"
      },
      {
          "name": "Cosmin Stefan Paun"
      },
      {
          "name": "Cristian Nita"
      },
      {
          "name": "Dan Barnoaiea"
      },
      {
          "name": "Dan Gheorghita"
      },
      {
          "name": "Dan Grecu"
      },
      {
          "name": "Daniel Crook"
      },
      {
          "name": "Daniel Guran"
      },
      {
          "name": "Darren Slater"
      },
      {
          "name": "David Stephen Evans"
      },
      {
          "name": "Deirdre Key"
      },
      {
          "name": "Deniz Celik"
      },
      {
          "name": "Devinder Saundh"
      },
      {
          "name": "Divakar Sen"
      },
      {
          "name": "Douglas Rankin"
      },
      {
          "name": "Elif Murt"
      },
      {
          "name": "Emily Hilborne"
      },
      {
          "name": "Emma Sherwood"
      },
      {
          "name": "Ethem Okan Ilker"
      },
      {
          "name": "Evelyne van Ewijk"
      },
      {
          "name": "Faisal Bilal"
      },
      {
          "name": "Fatih Buyukcelebi"
      },
      {
          "name": "Fernando Correia"
      },
      {
          "name": "Frank Garofano"
      },
      {
          "name": "Garry Rees"
      },
      {
          "name": "Gary Newbury"
      },
      {
          "name": "Gary Thomas"
      },
      {
          "name": "Gavin Mark Price"
      },
      {
          "name": "Gavin Mason"
      },
      {
          "name": "Gokhan Surucu"
      },
      {
          "name": "Grace Nzeakor"
      },
      {
          "name": "Graham Payne"
      },
      {
          "name": "Gregory Walker"
      },
      {
          "name": "Gunash Rostami"
      },
      {
          "name": "Hafiz Mustafa"
      },
      {
          "name": "Haoran Li"
      },
      {
          "name": "Hardev Tanday"
      },
      {
          "name": "Hema Namani"
      },
      {
          "name": "Hong Quan Liu"
      },
      {
          "name": "Hongyan Zhang"
      },
      {
          "name": "Hua Fan"
      },
      {
          "name": "Hua Wang"
      },
      {
          "name": "Hugh Clenaghan"
      },
      {
          "name": "Hugh Higgins"
      },
      {
          "name": "Huiqi Wang"
      },
      {
          "name": "Iain Hards"
      },
      {
          "name": "Ian Sullivan"
      },
      {
          "name": "Imran Ahmad"
      },
      {
          "name": "Isam Akhtar"
      },
      {
          "name": "Ismet Soy"
      },
      {
          "name": "Ivan Atanasovski"
      },
      {
          "name": "James Koroma"
      },
      {
          "name": "Jatin Sharma"
      },
      {
          "name": "Jean-Michel Grzadka"
      },
      {
          "name": "Jeffrey Dixon "
      },
      {
          "name": "Jhahanger Zaman"
      },
      {
          "name": "Jignesh Ambasana"
      },
      {
          "name": "Joao Filipe Carrasco Goncalves"
      },
      {
          "name": "Joe Jacob"
      },
      {
          "name": "John Blenman"
      },
      {
          "name": "John Harding"
      },
      {
          "name": "John Horsman"
      },
      {
          "name": "John Jalilian "
      },
      {
          "name": "John Packer"
      },
      {
          "name": "Joyce Xu"
      },
      {
          "name": "Judrin Philips"
      },
      {
          "name": "Jujhar Singh Matta"
      },
      {
          "name": "Junaid Muhammad"
      },
      {
          "name": "Kaiyuan Li"
      },
      {
          "name": "Kamaljit Bola"
      },
      {
          "name": "Kanchan Mitra"
      },
      {
          "name": "Karl Webster",
          "L3_322": "Y",
          "L3_323": "Y",
          "L3_324": "Y",
          "L3_325": "Y",
          "L3_326": "Y",
          "L3_327": "Y",
          "L3_328": "Y",
          "L3_329": "Y",
          "L3_330": "Y",
          "L3_331": "Y",
          "L3_332": "Y",
          "L3_333": "Y",
          "L3_334": "Y",
          "L3_335": "Y",
          "L3_336": "Y",
          "L3_337": "Y",
          "L3_338": "Y",
          "L3_339": "Y",
          "L3_340": "Y",
          "L3_341": "Y",
          "L3_342": "Y",
          "L3_343": "Y",
          "L3_344": "Y",
          "L3_345": "Y",
          "L3_346": "Y",
          "L3_347": "Y",
          "L3_348": "Y",
          "L3_349": "Y",
          "L3_350": "Y",
          "L3_351": "Y",
          "L3_352": "Y",
          "L3_353": "Y",
          "L3_354": "Y",
          "L3_355": "Y",
          "L3_413": "Y"
      },
      {
          "name": "Kashif Javed"
      },
      {
          "name": "Kathleen Almeida"
      },
      {
          "name": "Kazam Kamal"
      },
      {
          "name": "Kristian Bevan"
      },
      {
          "name": "Krzysztof Krakowiak"
      },
      {
          "name": "Kurt Barrington"
      },
      {
          "name": "Lalithraj Pushparaj"
      },
      {
          "name": "Lei Ge"
      },
      {
          "name": "Liz Perry"
      },
      {
          "name": "Lu Zhou"
      },
      {
          "name": "Lucy Liu (Yeu Liu)"
      },
      {
          "name": "Luke Kane"
      },
      {
          "name": "Man Singh"
      },
      {
          "name": "Manjusha Adabala"
      },
      {
          "name": "Manoj Pasupuleti "
      },
      {
          "name": "Maqbool Ahmad"
      },
      {
          "name": "Marius Catalin Toca"
      },
      {
          "name": "Mark Cuddy"
      },
      {
          "name": "Mark Daines"
      },
      {
          "name": "Martin Kievit"
      },
      {
          "name": "Matthew McCarthy"
      },
      {
          "name": "Matthew Stagg"
      },
      {
          "name": "Mehedi Hasan"
      },
      {
          "name": "Mert Uygun"
      },
      {
          "name": "Michael Gilbert"
      },
      {
          "name": "Michael Meaney"
      },
      {
          "name": "Michael Nandan"
      },
      {
          "name": "Miguel Angel Cano Blazquez "
      },
      {
          "name": "Miguel Bravo"
      },
      {
          "name": "Mohammad Abdul Nasir"
      },
      {
          "name": "Muhammad Arif"
      },
      {
          "name": "Muhammad Habib Qayyum Abdul"
      },
      {
          "name": "Muhammad Jawad Masood"
      },
      {
          "name": "Muhammad Salman Siddique"
      },
      {
          "name": "Mujeeb Pasha Mohammed"
      },
      {
          "name": "Mustafa Gurgen Demirag"
      },
      {
          "name": "Mutaz M Musa Idriss"
      },
      {
          "name": "Naginbhai Patel"
      },
      {
          "name": "Naveed Abbasi"
      },
      {
          "name": "Neha Thakur"
      },
      {
          "name": "Neil Maxwell"
      },
      {
          "name": "Neville David"
      },
      {
          "name": "Neville Laing"
      },
      {
          "name": "Nigel Clemmow"
      },
      {
          "name": "Nigel Ryan"
      },
      {
          "name": "Niket Sable"
      },
      {
          "name": "Nikhitha Veerabramhachar"
      },
      {
          "name": "Nitin Gupta"
      },
      {
          "name": "Nouman Rasheed"
      },
      {
          "name": "Nurudeen Ekemode"
      },
      {
          "name": "Olanrewaju Ajayi"
      },
      {
          "name": "Olanrewaju Ibrahim Amusa"
      },
      {
          "name": "Olawale Kuku"
      },
      {
          "name": "Ongun Sevim"
      },
      {
          "name": "Pardeep Khasa"
      },
      {
          "name": "Paul Hogg"
      },
      {
          "name": "Paul Lincoln"
      },
      {
          "name": "Paul Wade"
      },
      {
          "name": "Paul Whitlock"
      },
      {
          "name": "Paula Perdigao"
      },
      {
          "name": "Pei Cia Tan"
      },
      {
          "name": "Peng Ou"
      },
      {
          "name": "Peter Knight"
      },
      {
          "name": "Peter Spendley"
      },
      {
          "name": "Pradeep Kumar"
      },
      {
          "name": "Pushpa Reddy"
      },
      {
          "name": "Qijun Yang"
      },
      {
          "name": "Raju Ahmed"
      },
      {
          "name": "Ramamoorthy Murali Moorthy"
      },
      {
          "name": "Rambabu Pedapudi"
      },
      {
          "name": "Ramesh Kumar Behara"
      },
      {
          "name": "Ranjith Singh Vargheese"
      },
      {
          "name": "Raquel Sandra Ramiao Pereira"
      },
      {
          "name": "RATNASABAPATHY AMBIHAPATHY"
      },
      {
          "name": "Raymond Meade"
      },
      {
          "name": "Remi Odeyemi (Babatunde Odeyemi)"
      },
      {
          "name": "Richard Lock"
      },
      {
          "name": "Richard Tucker"
      },
      {
          "name": "Ritu Sheokand"
      },
      {
          "name": "Riza Shafi"
      },
      {
          "name": "Robert Ginder-Poulsen"
      },
      {
          "name": "Robert Gray"
      },
      {
          "name": "Robert Shaw"
      },
      {
          "name": "Romel Hoque"
      },
      {
          "name": "Ronny Friede"
      },
      {
          "name": "Rosemarie Bourne"
      },
      {
          "name": "Ross Millard"
      },
      {
          "name": "Rosyln Faulkner"
      },
      {
          "name": "Roxana Leca"
      },
      {
          "name": "Runyi Luo"
      },
      {
          "name": "Sahal Fatani"
      },
      {
          "name": "Saleem Qureshi"
      },
      {
          "name": "Samir Bensaad"
      },
      {
          "name": "Saquib Mohammed"
      },
      {
          "name": "Sarfaraz Alam Khan"
      },
      {
          "name": "Sarmad Jadoon"
      },
      {
          "name": "Sasan Fahim"
      },
      {
          "name": "Sathish Ramachandran"
      },
      {
          "name": "Sedat Gunes"
      },
      {
          "name": "Semih Ozer"
      },
      {
          "name": "Serdar Karaaslan"
      },
      {
          "name": "Shafiek Mohabbat"
      },
      {
          "name": "Shehr Yar Sikandari"
      },
      {
          "name": "Shenzhi Shi"
      },
      {
          "name": "Shibin Huang"
      },
      {
          "name": "Shuyun Ke"
      },
      {
          "name": "Sibo Li"
      },
      {
          "name": "Simon Clarke"
      },
      {
          "name": "Simon Connor"
      },
      {
          "name": "Simon Todd"
      },
      {
          "name": "Stefan Cristian Tanase"
      },
      {
          "name": "Stephen Colledge"
      },
      {
          "name": "Stephen Melnyczuk"
      },
      {
          "name": "Stephen Snow"
      },
      {
          "name": "Sunil Shivanand"
      },
      {
          "name": "Surajbabu Thumati"
      },
      {
          "name": "Surinder Sandhu"
      },
      {
          "name": "Syed Imran Shah"
      },
      {
          "name": "Syed Mohsin Ali Rizvi"
      },
      {
          "name": "Syed Rofi Imam"
      },
      {
          "name": "Tasawar Awan"
      },
      {
          "name": "Terry Earwicker"
      },
      {
          "name": "Umair Ashraf"
      },
      {
          "name": "Umar Khan"
      },
      {
          "name": "Umer Abdullah"
      },
      {
          "name": "Usman Tariq"
      },
      {
          "name": "Vijay Shankar Singh"
      },
      {
          "name": "Vinay Goomany"
      },
      {
          "name": "Vishal Parekh"
      },
      {
          "name": "Vlad Damache"
      },
      {
          "name": "Wade Liu"
      },
      {
          "name": "Waqas Ashraf"
      },
      {
          "name": "Waseem Rehman"
      },
      {
          "name": "Wei Wang"
      },
      {
          "name": "Wenhao Tang"
      },
      {
          "name": "Xin Yang"
      },
      {
          "name": "Yan Huang"
      },
      {
          "name": "Yan Wu "
      },
      {
          "name": "Yen-Wen Cheng"
      },
      {
          "name": "Yeu Liu"
      },
      {
          "name": "Yi Ching Lu"
      },
      {
          "name": "Yin Song"
      },
      {
          "name": "Ying Webber"
      },
      {
          "name": "Zain Ashraf"
      },
      {
          "name": "Zakeyu Kauma"
      },
      {
          "name": "Zhengmin Jin"
      },
      {
          "name": "test"
      }
  ]
};

console.log(testData.length)








var data3 = [
  {
      "Header": "Network Design / Planning",
      "accessor": "L1_38",
      "parent": "root",
      "columns": [
          {
              "Header": "Field",
              "accessor": "L2_121",
              "parent": "L1_38"
          },
          {
              "Header": "RAN",
              "accessor": "L2_122",
              "parent": "L1_38"
          },
          {
              "Header": "Core",
              "accessor": "L2_123",
              "parent": "L1_38"
          },
          {
              "Header": "Transport",
              "accessor": "L2_124",
              "parent": "L1_38"
          }
      ]
  },
  {
      "Header": "Build & Delivery",
      "accessor": "L1_39",
      "parent": "root"
  },
  {
      "Header": "Service Operations / Assurance",
      "accessor": "L1_40",
      "parent": "root"
  },
  {
      "Header": "NPO",
      "accessor": "L1_41",
      "parent": "root"
  },
  {
      "Header": "PMO",
      "accessor": "L1_42",
      "parent": "root"
  }
];

console.log(data3);