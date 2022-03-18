const colorPicker = document.getElementById("color-picker")
const schemesSelect = document.getElementById("schemes-select")
const generateBtn = document.getElementById("generate-btn")
const colorsDisplay = document.getElementById("colors-display")
const hexDisplay = document.getElementById("hex-display")
const form = document.getElementById("form")


/*
colorPicker.addEventListener("submit", (event) => {
    const baseColor = event.target.value
    console.log(baseColor)
})
*/

function getData() {
    const baseColor = colorPicker.value
    const scheme = schemesSelect.value
    const url = `https://www.thecolorapi.com/scheme?hex=${baseColor.substring(1)}&mode=${scheme}&count=5`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            colorsDisplay.innerHTML = ""
            hexDisplay.innerHTML = ""
            for ( let i=0; i<5; i++ ) {
                colorsDisplay.innerHTML += `
                    <div class="color" style="background-color:${data.colors[i].hex.value};"></div>
                `
                hexDisplay.innerHTML += `
                    <div class="hex-value">${data.colors[i].hex.value}</div>
                `
            }
        })
}

generateBtn.addEventListener("click", function(event) {
    event.preventDefault()
    getData()
})

/*
{
    "mode": "complement",
    "count": "5",
    "colors": [
        {
            "hex": {
                "value": "#2D5757",
                "clean": "2D5757"
            },
            "rgb": {
                "fraction": {
                    "r": 0.17647058823529413,
                    "g": 0.3411764705882353,
                    "b": 0.3411764705882353
                },
                "r": 45,
                "g": 87,
                "b": 87,
                "value": "rgb(45, 87, 87)"
            },
            "hsl": {
                "fraction": {
                    "h": 0.5,
                    "s": 0.3181818181818181,
                    "l": 0.25882352941176473
                },
                "h": 180,
                "s": 32,
                "l": 26,
                "value": "hsl(180, 32%, 26%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0.5,
                    "s": 0.48275862068965514,
                    "v": 0.3411764705882353
                },
                "value": "hsv(180, 48%, 34%)",
                "h": 180,
                "s": 48,
                "v": 34
            },
            "name": {
                "value": "Spectra",
                "closest_named_hex": "#2F5A57",
                "exact_match_name": false,
                "distance": 41
            },
            "cmyk": {
                "fraction": {
                    "c": 0.4827586206896551,
                    "m": 0,
                    "y": 0,
                    "k": 0.6588235294117647
                },
                "value": "cmyk(48, 0, 0, 66)",
                "c": 48,
                "m": 0,
                "y": 0,
                "k": 66
            },
            "XYZ": {
                "fraction": {
                    "X": 0.2563635294117647,
                    "Y": 0.30616,
                    "Z": 0.3683623529411765
                },
                "value": "XYZ(26, 31, 37)",
                "X": 26,
                "Y": 31,
                "Z": 37
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2D5757",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=2D5757"
            },
            "contrast": {
                "value": "#ffffff"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=2D5757"
                }
            },
            "_embedded": {}
        },
        {
            "hex": {
                "value": "#306161",
                "clean": "306161"
            },
            "rgb": {
                "fraction": {
                    "r": 0.18823529411764706,
                    "g": 0.3803921568627451,
                    "b": 0.3803921568627451
                },
                "r": 48,
                "g": 97,
                "b": 97,
                "value": "rgb(48, 97, 97)"
            },
            "hsl": {
                "fraction": {
                    "h": 0.5,
                    "s": 0.33793103448275863,
                    "l": 0.28431372549019607
                },
                "h": 180,
                "s": 34,
                "l": 28,
                "value": "hsl(180, 34%, 28%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0.5,
                    "s": 0.5051546391752577,
                    "v": 0.3803921568627451
                },
                "value": "hsv(180, 51%, 38%)",
                "h": 180,
                "s": 51,
                "v": 38
            },
            "name": {
                "value": "Spectra",
                "closest_named_hex": "#2F5A57",
                "exact_match_name": false,
                "distance": 272
            },
            "cmyk": {
                "fraction": {
                    "c": 0.5051546391752577,
                    "m": 0,
                    "y": 0,
                    "k": 0.6196078431372549
                },
                "value": "cmyk(51, 0, 0, 62)",
                "c": 51,
                "m": 0,
                "y": 0,
                "k": 62
            },
            "XYZ": {
                "fraction": {
                    "X": 0.28231725490196075,
                    "Y": 0.3395396078431372,
                    "Z": 0.41053843137254903
                },
                "value": "XYZ(28, 34, 41)",
                "X": 28,
                "Y": 34,
                "Z": 41
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=306161",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=306161"
            },
            "contrast": {
                "value": "#ffffff"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=306161"
                }
            },
            "_embedded": {}
        },
        {
            "hex": {
                "value": "#6C3232",
                "clean": "6C3232"
            },
            "rgb": {
                "fraction": {
                    "r": 0.4235294117647059,
                    "g": 0.19607843137254902,
                    "b": 0.19607843137254902
                },
                "r": 108,
                "g": 50,
                "b": 50,
                "value": "rgb(108, 50, 50)"
            },
            "hsl": {
                "fraction": {
                    "h": 0,
                    "s": 0.36708860759493667,
                    "l": 0.30980392156862746
                },
                "h": 0,
                "s": 37,
                "l": 31,
                "value": "hsl(0, 37%, 31%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0,
                    "s": 0.5370370370370371,
                    "v": 0.4235294117647059
                },
                "value": "hsv(0, 54%, 42%)",
                "h": 0,
                "s": 54,
                "v": 42
            },
            "name": {
                "value": "Buccaneer",
                "closest_named_hex": "#622F30",
                "exact_match_name": false,
                "distance": 243
            },
            "cmyk": {
                "fraction": {
                    "c": 0,
                    "m": 0.5370370370370372,
                    "y": 0.5370370370370372,
                    "k": 0.5764705882352941
                },
                "value": "cmyk(0, 54, 54, 58)",
                "c": 0,
                "m": 54,
                "y": 54,
                "k": 58
            },
            "XYZ": {
                "fraction": {
                    "X": 0.28017333333333333,
                    "Y": 0.24443450980392156,
                    "Z": 0.2179192156862745
                },
                "value": "XYZ(28, 24, 22)",
                "X": 28,
                "Y": 24,
                "Z": 22
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=6C3232",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=6C3232"
            },
            "contrast": {
                "value": "#ffffff"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=6C3232"
                }
            },
            "_embedded": {}
        },
        {
            "hex": {
                "value": "#763434",
                "clean": "763434"
            },
            "rgb": {
                "fraction": {
                    "r": 0.4627450980392157,
                    "g": 0.20392156862745098,
                    "b": 0.20392156862745098
                },
                "r": 118,
                "g": 52,
                "b": 52,
                "value": "rgb(118, 52, 52)"
            },
            "hsl": {
                "fraction": {
                    "h": 0,
                    "s": 0.38823529411764707,
                    "l": 0.33333333333333337
                },
                "h": 0,
                "s": 39,
                "l": 33,
                "value": "hsl(0, 39%, 33%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0,
                    "s": 0.5593220338983051,
                    "v": 0.4627450980392157
                },
                "value": "hsv(0, 56%, 46%)",
                "h": 0,
                "s": 56,
                "v": 46
            },
            "name": {
                "value": "Lotus",
                "closest_named_hex": "#863C3C",
                "exact_match_name": false,
                "distance": 680
            },
            "cmyk": {
                "fraction": {
                    "c": 0,
                    "m": 0.5593220338983053,
                    "y": 0.5593220338983053,
                    "k": 0.5372549019607843
                },
                "value": "cmyk(0, 56, 56, 54)",
                "c": 0,
                "m": 56,
                "y": 56,
                "k": 54
            },
            "XYZ": {
                "fraction": {
                    "X": 0.3005662745098039,
                    "Y": 0.2589474509803922,
                    "Z": 0.22706588235294117
                },
                "value": "XYZ(30, 26, 23)",
                "X": 30,
                "Y": 26,
                "Z": 23
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=763434",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=763434"
            },
            "contrast": {
                "value": "#ffffff"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=763434"
                }
            },
            "_embedded": {}
        },
        {
            "hex": {
                "value": "#823636",
                "clean": "823636"
            },
            "rgb": {
                "fraction": {
                    "r": 0.5098039215686274,
                    "g": 0.21176470588235294,
                    "b": 0.21176470588235294
                },
                "r": 130,
                "g": 54,
                "b": 54,
                "value": "rgb(130, 54, 54)"
            },
            "hsl": {
                "fraction": {
                    "h": 0,
                    "s": 0.4130434782608695,
                    "l": 0.3607843137254902
                },
                "h": 0,
                "s": 41,
                "l": 36,
                "value": "hsl(0, 41%, 36%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0,
                    "s": 0.5846153846153845,
                    "v": 0.5098039215686274
                },
                "value": "hsv(0, 58%, 51%)",
                "h": 0,
                "s": 58,
                "v": 51
            },
            "name": {
                "value": "Lotus",
                "closest_named_hex": "#863C3C",
                "exact_match_name": false,
                "distance": 266
            },
            "cmyk": {
                "fraction": {
                    "c": 0,
                    "m": 0.5846153846153845,
                    "y": 0.5846153846153845,
                    "k": 0.4901960784313726
                },
                "value": "cmyk(0, 58, 58, 49)",
                "c": 0,
                "m": 58,
                "y": 58,
                "k": 49
            },
            "XYZ": {
                "fraction": {
                    "X": 0.32419372549019604,
                    "Y": 0.2751278431372549,
                    "Z": 0.23636392156862746
                },
                "value": "XYZ(32, 28, 24)",
                "X": 32,
                "Y": 28,
                "Z": 24
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=823636",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=823636"
            },
            "contrast": {
                "value": "#ffffff"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=823636"
                }
            },
            "_embedded": {}
        }
    ],
    "seed": {
        "hex": {
            "value": "#713333",
            "clean": "713333"
        },
        "rgb": {
            "fraction": {
                "r": 0.44313725490196076,
                "g": 0.2,
                "b": 0.2
            },
            "r": 113,
            "g": 51,
            "b": 51,
            "value": "rgb(113, 51, 51)"
        },
        "hsl": {
            "fraction": {
                "h": 0,
                "s": 0.3780487804878049,
                "l": 0.32156862745098036
            },
            "h": 0,
            "s": 38,
            "l": 32,
            "value": "hsl(0, 38%, 32%)"
        },
        "hsv": {
            "fraction": {
                "h": 0,
                "s": 0.5486725663716814,
                "v": 0.44313725490196076
            },
            "value": "hsv(0, 55%, 44%)",
            "h": 0,
            "s": 55,
            "v": 44
        },
        "name": {
            "value": "Buccaneer",
            "closest_named_hex": "#622F30",
            "exact_match_name": false,
            "distance": 510
        },
        "cmyk": {
            "fraction": {
                "c": 0,
                "m": 0.5486725663716815,
                "y": 0.5486725663716815,
                "k": 0.5568627450980392
            },
            "value": "cmyk(0, 55, 55, 56)",
            "c": 0,
            "m": 55,
            "y": 55,
            "k": 56
        },
        "XYZ": {
            "fraction": {
                "X": 0.29036980392156864,
                "Y": 0.25169098039215687,
                "Z": 0.22249254901960785
            },
            "value": "XYZ(29, 25, 22)",
            "X": 29,
            "Y": 25,
            "Z": 22
        },
        "image": {
            "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=713333",
            "named": "https://www.thecolorapi.com/id?format=svg&hex=713333"
        },
        "contrast": {
            "value": "#ffffff"
        },
        "_links": {
            "self": {
                "href": "/id?hex=713333"
            }
        },
        "_embedded": {}
    },
    "image": {
        "bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=713333&mode=complement&count=5",
        "named": "https://www.thecolorapi.com/scheme?format=svg&hex=713333&mode=complement&count=5"
    },
    "_links": {
        "self": "/scheme?hex=713333&mode=complement&count=5",
        "schemes": {
            "monochrome": "/scheme?hex=713333&mode=monochrome&count=5",
            "monochrome-dark": "/scheme?hex=713333&mode=monochrome-dark&count=5",
            "monochrome-light": "/scheme?hex=713333&mode=monochrome-light&count=5",
            "analogic": "/scheme?hex=713333&mode=analogic&count=5",
            "complement": "/scheme?hex=713333&mode=complement&count=5",
            "analogic-complement": "/scheme?hex=713333&mode=analogic-complement&count=5",
            "triad": "/scheme?hex=713333&mode=triad&count=5",
            "quad": "/scheme?hex=713333&mode=quad&count=5"
        }
    },
    "_embedded": {}
}
*/