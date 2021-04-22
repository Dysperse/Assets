var item_state, item_p;
var page_title = 'News';
var form = document.getElementById("feedback-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        M.toast({
            html: "Thanks for your submission!"
        });
        $('#_feedback').modal('close');
        form.reset();
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

function edit_popup(id, name, qty, price, room) {
    sm_page('edit_page', '', '');
    var x = document.getElementById('edit_nav');
    var name1 = document.getElementById('edit_item_name');
    var qty1 = document.getElementById('edit_item_qty');
    x.style.display = 'block';
    var form = document.getElementById('edit_form');
    switch (room) {
        case 'bedroom':
            room1 = 'Home';
            form.action = './rooms/bedroom/edit.php';
            break;
        case 'kitchen':
            room1 = 'Contact';
            form.action = 'edit.php';
            break;
        case 'bathroom':
            room1 = 'bathroom';
            form.action = './rooms/bathroom/edit.php';
            break;
        case 'garage':
            room1 = 'About';
            form.action = './rooms/garage/edit.php';
            break;
        case 'garage':
            room1 = 'About';
            form.action = './rooms/garage/edit.php';
            break;
        case 'storage':
            room1 = 'storage';
            form.action = './rooms/storage/edit.php';
            break;
        case 'dining_room':
            room1 = 'dining_room';
            form.action = './rooms/dining_room/edit.php';
            break;
        case 'laundryroom':
            room1 = 'laundryroom';
            form.action = './rooms/laundry/edit.php';
            break;
        case 'camping':
            room1 = 'cs';
            form.action = './rooms/camping/edit.php';
            break;
        case 'custom_room':
            room1 = 'custom_room';
            form.action = './rooms/custom_item_edit.php';
            break;
    }
    document.getElementById('edit_item_id').value = id;
    name1.value = name;
    name1.focus();
    qty1.value = qty;
    qty1.focus();
    document.getElementById('editback').onclick = function() {
        edit_back(room1);
    };
}

function edit_back(data) {
    var x = document.getElementById('edit_nav');
    x.style.display = 'none';
    sm_page(data, this, '');
}

function item(id, name, qty, price, directory, room, star) {
    document.getElementById('action_qr').href = "https://api.qrserver.com/v1/create-qr-code/?size=1500x1500&data=" + encodeURI("I currently have " + qty + " " + name + " in my inventory");
    var nav_star_i = document.querySelector('#nav_star i');
    var edit_fab = document.getElementById('editfab');
    var action_recipe = document.getElementById('action_recipe');
    var navedit = document.getElementById('nav_edit');
    edit_fab.style.display = 'block';
    edit_fab.style.transform = 'scale(0)';
    setTimeout(function() {
        edit_fab.style.display = 'block';
        edit_fab.style.transform = 'scale(1)';
    }, 10);
    edit_fab.onclick = function() {
        setTimeout(function() {
            edit_popup(id, name, qty, price, room);
        }, 0.001);
    };
    document.body.style.overflow = 'hidden';
    document.getElementById('nav_star').style.display = '';
    document.getElementById('action_share_p').onclick = function() {
        if (navigator.share) {
            document.getElementById('action_share_p').style.display = "block";
            navigator.share({
                title: document.title,
                text: "I'm currently having " + qty + " " + name + " in my inventory.",
                url: window.location.href
            }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing:', error));
        }
    };
    document.getElementById("FLOATING_ACTION_BUTTON").style.transform = "scale(0)";
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#1f1f1f");
    switch (room) {
        case 'bedroom':
            page_title = 'Home';
            break;
        case 'kitchen':
            page_title = 'Contact';
            break;
        case 'bathroom':
            page_title = 'bathroom';
            break;
        case 'garage':
            page_title = 'About';
            break;
        case 'garage':
            page_title = 'About';
            break;
        case 'family':
            page_title = 'family';
            break;
        case 'storage':
            page_title = 'storage';
            break;
        case 'dining_room':
            page_title = 'dining_room';
            break;
        case 'laundryroom':
            page_title = 'laundryroom';
            break;
        case 'camping':
            page_title = 'cs';
            break;
        case 'custom_room':
            page_title = 'custom_room';
            page_title = 'custom_room';
            document.getElementById('nav_star').style.display = 'none';
            break;
    }
    item_state = 'item_popup';
    item_p = 1;
    document.getElementById("action_delete").onclick = function() {
        document.getElementById(room + 'tr_' + id).style.display = 'none';
        if (room == 'kitchen') {
            toast(name, qty);
        } else {
            M.toast({
                html: 'Deleted!'
            });
        }
        $("#div1").load(directory + "delete.php?id=" + id);
        sm_page(page_title, '', '');
    };
    document.getElementById("nav_delete").onclick = function() {
        document.getElementById(room + 'tr_' + id).style.display = 'none';
        if (room == 'kitchen') {
            toast(name, qty);
        } else {
            M.toast({
                html: 'Deleted "' + name + '"'
            });
        }
        $("#div1").load(directory + "delete.php?id=" + id);
        sm_page(page_title, '', '');
    };
    if (star == 0) {
        nav_star_i.innerHTML = 'star_outline';
    } else {
        nav_star_i.innerHTML = 'star';
    }
    var _navstar = document.getElementById("nav_star");
    switch (room) {
        case 'kitchen':
            _navstar.onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/star.php?id=' + id);
                    document.getElementById('kitchentr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('kitchentr_' + id).style.borderLeft = '';
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/star.php?id=' + id);
                    document.getElementById('kitchentr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('kitchentr_' + id).style.borderLeft = '3px solid #f57f17';
                }
                return false;
            }
            break;
        case 'bedroom':
            _navstar.onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/bedroom/star.php?id=' + id);
                    document.getElementById('bedroomtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('bedroomtr_' + id).style.borderLeft = '';
                    M.toast({
                        html: 'Un-Starred item'
                    });
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/bedroom/star.php?id=' + id);
                    document.getElementById('bedroomtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('bedroomtr_' + id).style.borderLeft = '3px solid #f57f17';
                }
                return false;
            };
            break;
        case 'garage':
            _navstar.onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/garage/star.php?id=' + id);
                    document.getElementById('garagetr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('garagetr_' + id).style.borderLeft = '';
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/garage/star.php?id=' + id);
                    document.getElementById('garagetr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('garagetr_' + id).style.borderLeft = '3px solid #f57f17';
                }
                return false;
            };
            break;
        case 'camping':
            _navstar.onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/camping/star.php?id=' + id);
                    document.getElementById('campingtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('campingtr_' + id).style.borderLeft = '';
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/camping/star.php?id=' + id);
                    document.getElementById('campingtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('campingtr_' + id).style.borderLeft = '3px solid #f57f17';
                }
                return false;
            };
            break;
        case 'bathroom':
            document.getElementById("nav_star").onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/bathroom/star.php?id=' + id);
                    document.getElementById('bathroomtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('bathroomtr_' + id).style.borderLeft = '';
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/bathroom/star.php?id=' + id);
                    document.getElementById('bathroomtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('bathroomtr_' + id).style.borderLeft = '3px solid #f57f17';
                };
                return false;
            }
            break;
        case 'family':
            _navstar.onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/family/star.php?id=' + id);
                    document.getElementById('familytr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('familytr_' + id).style.borderLeft = '';
                    M.toast({
                        html: 'Un-Starred item'
                    });
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/family/star.php?id=' + id);
                    document.getElementById('familytr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('familytr_' + id).style.borderLeft = '3px solid #f57f17';
                }
                return false
            }
            break;
        case 'storage':
            _navstar.onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/storage/star.php?id=' + id);
                    document.getElementById('storagetr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('storagetr_' + id).style.borderLeft = '';
                    M.toast({
                        html: 'Un-Starred item'
                    });
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/storage/star.php?id=' + id);
                    document.getElementById('storagetr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('storagetr_' + id).style.borderLeft = '3px solid #f57f17';
                }
                return false
            }
            break;
        case 'laundryroom':
            _navstar.onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/laundry/star.php?id=' + id);
                    document.getElementById('laundryroomtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('laundryroomtr_' + id).style.borderLeft = '';
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/laundry/star.php?id=' + id);
                    document.getElementById('laundryroomtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('laundryroomtr_' + id).style.borderLeft = '3px solid #f57f17';
                }
                return false
            }
            break;
        case 'dining_room':
            document.getElementById("nav_star").onclick = function() {
                if (nav_star_i.innerHTML == 'star') {
                    nav_star_i.innerHTML = 'star_outline';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/dining_room/star.php?id=' + id);
                    document.getElementById('dining_roomtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 0);
                    };
                    document.getElementById('dining_roomtr_' + id).style.borderLeft = '';
                } else {
                    nav_star_i.innerHTML = 'star';
                    $('#div1').load('https://smartlist.ga/dashboard/rooms/dining_room/star.php?id=' + id);
                    document.getElementById('dining_roomtr_' + id).onclick = function() {
                        item(id, name, qty, price, directory, room, 1);
                    };
                    document.getElementById('dining_roomtr_' + id).style.borderLeft = '3px solid #f57f17';
                }
                return false
            }
            break;
    }
    document.getElementById('nav_edit').onclick = function() {
        setTimeout(function() {
            document.getElementById('editfab').click();
        }, 100);
    }
    document.getElementById('action_edit').onclick = function() {
        setTimeout(function() {
            document.getElementById('editfab').click();
        }, 100);
    }
    action_recipe.href = "https://www.google.com/search?q=recipes+with+" + encodeURI(name);
    if (room !== 'kitchen') {
        action_recipe.style.display = 'none';
    } else if (room == 'kitchen') {
        action_recipe.style.display = '0';
    }
    document.getElementById('item_title').innerHTML = name;
    document.getElementById('item_qty').innerHTML = "Quantity: " + qty;
    document.getElementById('action_mail').href = "mailto:hello@homebase.rf.gd?subject=My%20Inventory%20Status%20%7C%20Smartlist&body=Hi%20_____%2C%0D%0AI'm%20currently%20having%20" + encodeURI(qty) + "%20" + encodeURI(name) + "%20in%20my%20" + encodeURI(room) + ".%0D%0A%0D%0AThank%20you%2C%0D%0ASincerely%2C%0D%0A________";
    document.getElementById('item_desc').innerHTML = "<div class='chip'>Category: " + price + "</div><div class='chip'>Room: " + room + "</div>";
    if (room == 'kitchen') {
        document.getElementById('item_desc').style.display = 'block'
    } else {
        document.getElementById('item_desc').innerHTML = "<div class='chip'>Room: " + room + "</div>";
    }
    if (id == 'KITCHEN_IDENTIFY_BY_NAME') {
        document.getElementById("action_delete").onclick = function() {
            document.getElementById('KITCHEN_tr_' + name).style.display = 'none';
            toast(name, qty);
            $("#div1").load("https://smartlist.ga/dashboard/rooms/kitchen/quickdelete.php?name=" + encodeURI(name) + "&qty=" + encodeURI(qty) + "&price=" + encodeURI(price));
            sm_page(page_title, '', '')
        };
        document.getElementById("nav_delete").onclick = function() {
            document.getElementById('KITCHEN_tr_' + name).style.display = 'none';
            toast(name, qty);
            $("#div1").load("https://smartlist.ga/dashboard/rooms/kitchen/quickdelete.php?name=" + encodeURI(name) + "&qty=" + encodeURI(qty) + "&price=" + encodeURI(price));
            sm_page(page_title, '', '')
        }
    } else if (id == 'BEDROOM_IDENTIFY_BY_NAME') {
        document.getElementById("action_delete").onclick = function() {
            document.getElementById('BEDROOM_tr' + name).style.display = 'none';
            M.toast({
                html: 'Deleted!'
            });
            $("#div1").load("https://smartlist.ga/dashboard/rooms/bedroom/quickdelete.php?name=" + encodeURI(name) + "&qty=" + encodeURI(qty));
            sm_page(page_title, '', '')
        };
        document.getElementById("nav_delete").onclick = function() {
            document.getElementById('BEDROOM_tr' + name).style.display = 'none';
            M.toast({
                html: 'Deleted!'
            });
            $("#div1").load("https://smartlist.ga/dashboard/rooms/bedroom/quickdelete.php?name=" + encodeURI(name) + "&qty=" + encodeURI(qty));
            sm_page(page_title, '', '')
        };
    }
    if (id == 'BATHROOM_IDENTIFY_BY_NAME') {
        document.getElementById("action_delete").onclick = function() {
            document.getElementById('BATHROOM_tr' + name).style.display = 'none';
            M.toast({
                html: 'Deleted!'
            });
            $("#div1").load("https://smartlist.ga/dashboard/rooms/bathroom/quickdelete.php?name=" + encodeURI(name) + "&qty=" + encodeURI(qty));
            sm_page(page_title, '', '')
        };
        document.getElementById("nav_delete").onclick = function() {
            document.getElementById('BATHROOM_tr' + name).style.display = 'none';
            M.toast({
                html: 'Deleted!'
            });
            $("#div1").load("https://smartlist.ga/dashboard/rooms/bathroom/quickdelete.php?name=" + encodeURI(name) + "&qty=" + encodeURI(qty));
            sm_page(page_title, '', '')
        };
    }
    document.getElementById('action_share').href = "https://smartlist.ga/dashboard/rooms/share/?name=" + encodeURI(name) + "&itemqty=" + encodeURI(qty) + "&room=kitchen&id=" + id + "&new=true" + id;
    sm_page('item_popup', this, '');
    secondary();
    if (room == 'custom_room') {
        document.getElementById('nav_delete').onclick = function() {
            $('#div1').load('./rooms/custom_item_delete.php?id=' + id);
            sm_page('custom_room', this, '');
            document.getElementById('croomtr_' + id).style.background = 'rgba(235, 185, 181, .5)';
            setTimeout(function() {
                document.getElementById('croomtr_' + id).style.display = 'none';
            }, 1000);
        };
        document.getElementById('action_delete').onclick = function() {
            $('#div1').load('./rooms/custom_item_delete.php?id=' + id);
            sm_page('custom_room', this, '');
            document.getElementById('croomtr_' + id).style.background = 'rgba(235, 185, 181, .5)';
            setTimeout(function() {
                document.getElementById('croomtr_' + id).style.display = 'none';
            }, 1000);
        };
    };
}
const __bmconfig = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
            },
            scaleLabel: {
                display: true,
                labelString: 'You spent '
            }
        }],
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            scaleLabel: {
                display: true,
                labelString: 'Date'
            }
        }]
    },
    tooltips: {
        titleFontSize: 16,
        caretPadding: 10,
        bodyFontSize: 14,
        mode: 'index',
        intersect: false,
        displayColors: false,
        xPadding: 20,
        yPadding: 15,
        bodyFontColor: '#919191',
        backgroundColor: '#fff',
        cornerRadius: 6,
        borderColor: '#ccc',
        borderWidth: 1.5,
        titleFontColor: '#212121',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + ' dollars';
            },
        },
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    elements: {
        animationEasing: 'easeIn',
        line: {
            tension: 0.2
        },
        point: {
            radius: 0
        }
    },
};

function bm_add() {
    var x = document.getElementById('bm_amount');
    $('#div1').load('https://smartlist.ga/scalesize/bm/addx.php?n=' + x.value);
    addData(myChart, new Date().toJSON().slice(0, 10).split('-').reverse().join('/'), x.value);
    x.value = '';
    sm_page('News', this, '');
}

function updateScales(chart) {
    var xScale = chart.scales.x;
    var yScale = chart.scales.y;
    chart.options.scales = {
        newId: {
            display: true
        },
        y: {
            display: true,
        }
    };
    chart.update();
    xScale = chart.scales.newId;
    yScale = chart.scales.y;
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data);
    chart.data.datasets[1].data.push(__bmgoal);
    chart.update();
}
var _color = document.getElementById("color");

function AJAX_LOAD(el, data, style = '') {
    document.body.style.overflow = 'hidden';
    if (style !== 'box') {
        document.querySelector(el).innerHTML = '<center><br><br><br><svg class=\'circular\' height=\'50\' width=\'50\'> <circle class=\'path\' cx=\'25\' cy=\'25\' r=\'20\' fill=\'none\' stroke-width=\'3\' stroke-miterlimit=\'10\' /> </svg><br></center>';
    } else {
        document.querySelector(el).innerHTML = "<div style='width:100%;background:rgba(200,200,200,.3);height:300px'></div>";
    }
    $(el).load(data);
    document.body.style.overflow = '';
}
$('select').formSelect();

function showsearch() {
    var oijw = document.getElementById("searchbar");
    if (oijw.style.display === "none") {
        oijw.style.display = "block";
    } else {
        oijw.style.display = "none";
    }
}

function secondary() {
    var oijwsecondary_nav = document.getElementById("secondary_nav");
    if (oijwsecondary_nav.style.display === "none") {
        oijwsecondary_nav.style.display = "block";
    } else {
        oijwsecondary_nav.style.display = "none";
    }
}
var brandlogotext = document.getElementById("brandlogo");
$(document).ready(function() {
    $('input.autocomplete').autocomplete({
        onAutocomplete: function() {
            nav_title('Search Results');
            w_title('Search Results');
            changeValue();
            sm_page('searchresults', this, '');
        },
        data: {
            "Apple": 'https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078?k=6&m=683494078&s=612x612&w=0&h=aVyDhOiTwUZI0NeF_ysdLZkSvDD4JxaJMdWSx2p3pp4=',
            "Banana": null,
            "Orange": null,
            "Coriander": null,
            "Kale": null,
            "Watermelon": null,
            "Mango": null,
            "Noodles": null,
            "Juice": null,
            "Dal": null,
            "Black beans": null,
            "Kidney beans": null,
            "Coconuts": null,
            "Dark Chocolate": null,
            "Bread": null,
            "Chocolate": null,
            "Yogurt": null,
            "Milk": null,
            "Cilantro": null,
            "Sooji fine": null,
            "Saaru powder": null,
            "Pineapple": null,
            "Almond": null,
            "Carrot": null,
            "Brocolli": null,
            "JavaScript": null,
            "Lisp": null,
            "Perl": null,
            "PHP": null,
            "Python": null,
            "Ruby": null,
            "Scala": null,
            "Scheme": null,
            "Apricot": null,
            "Artichoke": null,
            "Asian Pear": null,
            "Asparagus": null,
            "Atemoya": null,
            "Avocado": null,
            "Bamboo Shoots": null,
            "Bean Sprouts": null,
            "Beans": null,
            "Beets": null,
            "Belgian Endive": null,
            "Bell Peppers": null,
            "Bitter Melon": null,
            "Blackberries": null,
            "Blueberries": null,
            "Bok Choy": null,
            "Boniato": null,
            "Boysenberries": null,
            "Broccoflower": null,
            "Broccoli": null,
            "Brussels Sprouts": null,
            "Cabbage": null,
            "Cactus Pear": null,
            "Cantaloupe": null,
            "Carambola": null,
            "Carrots": null,
            "Casaba Melon": null,
            "Cauliflower": null,
            "Celery": null,
            "Chayote": null,
            "Cherimoya": null,
            "Cherries": null,
            "Collard Greens": null,
            "Corn": null,
            "Cranberries": null,
            "Cucumber": null,
            "Dates": null,
            "Dried Plums": null,
            "Eggplant": null,
            "Endive": null,
            "Escarole": null,
            "Feijoa": null,
            "Fennel": null,
            "Figs": null,
            "Garlic": null,
            "Gooseberries": null,
            "Grapefruit": null,
            "Grapes": null,
            "Green Beans": null,
            "Green Onions": null,
            "Greens": null,
            "Guava": null,
            "Hominy": null,
            "Honeydew Melon": null,
            "Horned Melon": null,
            "Iceberg Lettuce": null,
            "Jerusalem Artichoke": null,
            "Jicama": null,
            "Kiwifruit": null,
            "Kohlrabi": null,
            "Kumquat": null,
            "Leeks": null,
            "Lemons": null,
            "Lettuce": null,
            "Lima Beans": null,
            "Limes": null,
            "Longan": null,
            "Loquat": null,
            "Lychee": null,
            "Madarins": null,
            "Malanga": null,
            "Mandarin Oranges": null,
            "Mangos": null,
            "Mulberries": null,
            "Mushrooms": null,
            "Napa": null,
            "Nectarines": null,
            "Okra": null,
            "Onion": null,
            "Oranges": null,
            "Papayas": null,
            "Parsnip": null,
            "Passion Fruit": null,
            "Peaches": null,
            "Pears": null,
            "Peas": null,
            "Peppers": null,
            "Persimmons": null,
            "Plantains": null,
            "Plums": null,
            "Pomegranate": null,
            "Potatoes": null,
            "Prickly Pear": null,
            "Prunes": null,
            "Pummelo": null,
            "Pumpkin": null,
            "Quince": null,
            "Radicchio": null,
            "Radishes": null,
            "Raisins": null,
            "Raspberries": null,
            "Red Cabbage": null,
            "Rhubarb": null,
            "Romaine Lettuce": null,
            "Rutabaga": null,
            "Shallots": null,
            "Snow Peas": null,
            "Spinach": null,
            "Sprouts": null,
            "Squash": null,
            "Strawberries": null,
            "String Beans": null,
            "Sweet Potato": null,
            "Tangelo": null,
            "Tangerines": null,
            "Tomatillo": null,
            "Tomato": null,
            "Turnip": null,
            "Ugli Fruit": null,
            "Water Chestnuts": null,
            "Watercress": null,
            "Waxed Beans": null,
            "Yams": null,
            "Yellow Squash": null,
            "Yuca/Cassava": null,
            "Zucchini Squash": null,
        },
        limit: 3,
    });
    $('.modal').modal({
        onCloseStart: function() {
            w_title('Dashboard');
        }
    });
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('#fab').floatingActionButton();
    $('#modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.tooltipped').tooltip({
        transitionMovement: 5
    });
    $('.materialboxed').materialbox();
    $('.sidenav').sidenav().on('click tap', 'li a:not(.collapsible-header)', () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('.sidenav').sidenav('close');
        }
    });
    if (window.localStorage.getItem('accept_cookies')) {
        $('#hide_notification').hide();
    }
    $("#notification").click(function() {
        window.localStorage.setItem('accept_cookies', true);
        $('#hide_notification').hide();
    });
});

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("FLOATING_ACTION_BUTTON").style.width = '130px';
        document.getElementById("FLOATING_ACTION_BUTTON").getElementsByTagName('i')[0].classList.remove('active_i');
        setTimeout(function() {
            document.getElementById("FLOATING_ACTION_BUTTON").getElementsByTagName('span')[0].style.opacity = 1;
        }, 200);
    } else {
        document.getElementById("FLOATING_ACTION_BUTTON").getElementsByTagName('span')[0].style.opacity = 0;
        setTimeout(function() {
            document.getElementById("FLOATING_ACTION_BUTTON").style.width = '56px';
            document.getElementById("FLOATING_ACTION_BUTTON").getElementsByTagName('i')[0].classList.add('active_i');
        }, 100);
    }
    prevScrollpos = currentScrollPos;
};
var smartlist_page_names = [];

function sm_page(pageName, elmnt, color) {
    elmnt = elmnt || "";
    color = color || "";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById('editfab').style.display = 'none';
    document.body.style.overflow = '';
    document.getElementById('edit_nav').style.display = 'none';
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
    $(pageName).scrollTop(0);
    window.scrollTo(0, 0);
    document.getElementById("secondary_nav").style.display = "none";
    smartlist_page_names.push(pageName);
}
document.getElementById("defaultOpen").click();

function filter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
var metaThemeColor;
const toggleSwitch = document.querySelector('#darkmode');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", "#191918");
        // document.getElementById("imageid").src = "https://www.whatswithtech.com/wp-content/uploads/2015/09/black-and-blue-material-design-wallpaper.png";
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", "#191918");
        // document.getElementById("imageid").src = "https://www.whatswithtech.com/wp-content/uploads/2015/09/black-and-blue-material-design-wallpaper.png";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", "#2a1782");
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

function toast(name, qty) {
    M.toast({
        html: "Deleted \"" + name + '" <a class="btn-flat toast-action waves-effect waves-orange text-white" style="color: white !important" href="https://smartlist.ga/dashboard/exe.php?name=' + encodeURI(name) + '&qty=' + qty + '&price=1">Undo</a>'
    });
}

function changeValue() {
    document.getElementById("sr").innerHTML = document.getElementById("search").value;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function desktop_ping(theBody, theTitle) {
    var dts = Math.floor(Date.now());
    if (!('Notification' in window)) {
        var options = {
            body: theBody,
            icon: 'https://i.ibb.co/FDqN0Vh/Screenshot-2021-02-02-at-7-55-08-AM-2.png',
            timestamp: dts,
        };
        var n = new Notification(theTitle, options);
        n.onclick = function() {
            event.preventDefault();
            window.focus();
            sm_page('notification_popup', '', '');
        };
        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState === 'visible') {
                n.close();
            }
        });
        syncalertplayAudio();
    }
}

$(window).bind('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
            case 'f':
                event.preventDefault();
                showsearch();
                document.getElementById('search').focus();
                break;
            case 'd':
                event.preventDefault();
                $('.modal').modal('close');
                $('#key').modal('open');
                w_title('Keyboard Shortcuts');
                break;
            case 'e':
                event.preventDefault();
                $('.modal').modal('close');
                sm_page('modal1', this, '');
                brandlogotext.innerHTML = 'Settings';
                w_title('Settings');
                nav_title('Settings');
                break;
            case 'b':
                event.preventDefault();
                $('.modal').modal('close');
                w_title('Budget Meter');
                nav_title('Budget Meter');
                sm_page('budgetmetermodal', this, '');
                break;
            case 's':
                event.preventDefault();
                $('.modal').modal('close');
                $('#budgetmetermodala').modal('open');
                w_title('Add an item');
                break;
        }
    }
});

function load_croom(data, name) {
    document.getElementById('custom_room').innerHTML = '<center><br><br><br><svg class=\'circular\' height=\'50\' width=\'50\'> <circle class=\'path\' cx=\'25\' cy=\'25\' r=\'20\' fill=\'none\' stroke-width=\'3\' stroke-miterlimit=\'10\' /> </svg><br></center>';
    $('#custom_room').load('https://smartlist.ga/dashboard/rooms/ajax_croom_loader.php?room=' + encodeURI(data));
    sm_page('custom_room', this, '');
    brandlogotext.innerHTML = name;
}
window.onerror = function(msg, url, linenumber) {
    alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
    return true;
};

function w_title(data) {
    document.title = data + " | Smartlist";
}

function task_complete() {
    var x = document.getElementById("task_complete");
    x.play();
}
var syncalertx = document.getElementById("syncalert");

function syncalertplayAudio() {
    syncalertx.play();
}

function notifyMe() {
    if (!("Notification" in window)) {
        M.toast({
            html: 'Your current browser doesn\'t support notifications. We reccomend using Chrome for the best experience'
        });
    } else if (Notification.permission === "granted") {} else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {}
        });
    }
}

function request_notification() {
    if (!("Notification" in window)) {
        M.toast({
            html: 'Your current browser doesn\'t support notifications. We reccomend using Chrome for the best experience'
        });
    } else if (Notification.permission === "granted") {} else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                /*var notification = new Notification("Nice! Notifications are enabled!");*/
            }
        });
    }
}
var map = {};
onkeydown = onkeyup = function(e) {
    e = e || event;
    map[e.keyCode] = e.type == 'keydown';
    if (map["191"] == true) {
        e.preventDefault();
        showsearch();
        document.getElementById('search').focus();
    }
};
Pusher.logToConsole = false;
var pusher = new Pusher('70e2355e418d35261aca', {
    cluster: 'us3'
});
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
    var notification = new Notification("" + data);
});
$(document).ready(function() {
    $('input.autocomplete1').autocomplete({
        data: {
            "Apple": null,
            "Banana": null,
            "Orange": null,
            "Coriander": null,
            "Kale": null,
            "Watermelon": null,
            "Mango": null,
            "Noodles": null,
            "Juice": null,
            "Dal": null,
            "Black beans": null,
            "Kidney beans": null,
            "Coconuts": null,
            "Dark Chocolate": null,
            "Bread": null,
            "Chocolate": null,
            "Yogurt": null,
            "Milk": null,
            "Cilantro": null,
            "Sooji fine": null,
            "Saaru powder": null,
            "Pineapple": null,
            "Almond": null,
            "Carrot": null,
            "Brocolli": null,
            "JavaScript": null,
            "Lisp": null,
            "Perl": null,
            "PHP": null,
            "Python": null,
            "Ruby": null,
            "Scala": null,
            "Scheme": null,
            "Apricot": null,
            "Artichoke": null,
            "Asian Pear": null,
            "Asparagus": null,
            "Atemoya": null,
            "Avocado": null,
            "Bamboo Shoots": null,
            "Bean Sprouts": null,
            "Beans": null,
            "Beets": null,
            "Belgian Endive": null,
            "Bell Peppers": null,
            "Bitter Melon": null,
            "Blackberries": null,
            "Blueberries": null,
            "Bok Choy": null,
            "Boniato": null,
            "Boysenberries": null,
            "Broccoflower": null,
            "Broccoli": null,
            "Brussels Sprouts": null,
            "Cabbage": null,
            "Cactus Pear": null,
            "Cantaloupe": null,
            "Carambola": null,
            "Carrots": null,
            "Casaba Melon": null,
            "Cauliflower": null,
            "Celery": null,
            "Chayote": null,
            "Cherimoya": null,
            "Cherries": null,
            "Collard Greens": null,
            "Corn": null,
            "Cranberries": null,
            "Cucumber": null,
            "Dates": null,
            "Dried Plums": null,
            "Eggplant": null,
            "Endive": null,
            "Escarole": null,
            "Feijoa": null,
            "Fennel": null,
            "Figs": null,
            "Garlic": null,
            "Gooseberries": null,
            "Grapefruit": null,
            "Grapes": null,
            "Green Beans": null,
            "Green Onions": null,
            "Greens": null,
            "Guava": null,
            "Hominy": null,
            "Honeydew Melon": null,
            "Horned Melon": null,
            "Iceberg Lettuce": null,
            "Jerusalem Artichoke": null,
            "Jicama": null,
            "Kiwifruit": null,
            "Kohlrabi": null,
            "Kumquat": null,
            "Leeks": null,
            "Lemons": null,
            "Lettuce": null,
            "Lima Beans": null,
            "Limes": null,
            "Longan": null,
            "Loquat": null,
            "Lychee": null,
            "Madarins": null,
            "Malanga": null,
            "Mandarin Oranges": null,
            "Mangos": null,
            "Mulberries": null,
            "Mushrooms": null,
            "Napa": null,
            "Nectarines": null,
            "Okra": null,
            "Onion": null,
            "Oranges": null,
            "Papayas": null,
            "Parsnip": null,
            "Passion Fruit": null,
            "Peaches": null,
            "Pears": null,
            "Peas": null,
            "Peppers": null,
            "Persimmons": null,
            "Plantains": null,
            "Plums": null,
            "Pomegranate": null,
            "Potatoes": null,
            "Prickly Pear": null,
            "Prunes": null,
            "Pummelo": null,
            "Pumpkin": null,
            "Quince": null,
            "Radicchio": null,
            "Radishes": null,
            "Raisins": null,
            "Raspberries": null,
            "Red Cabbage": null,
            "Rhubarb": null,
            "Romaine Lettuce": null,
            "Rutabaga": null,
            "Shallots": null,
            "Snow Peas": null,
            "Spinach": null,
            "Sprouts": null,
            "Squash": null,
            "Strawberries": null,
            "String Beans": null,
            "Sweet Potato": null,
            "Tangelo": null,
            "Tangerines": null,
            "Tomatillo": null,
            "Tomato": null,
            "Turnip": null,
            "Ugli Fruit": null,
            "Water Chestnuts": null,
            "Watercress": null,
            "Waxed Beans": null,
            "Yams": null,
            "Yellow Squash": null,
            "Yuca/Cassava": null,
            "Zucchini Squash": null,
            "Buffet": null,
            "Chairs": null,
            "Lamps": null,
            "Rugs": null,
            "Table": null,
            "Curtains": null,
            "Draperies": null,
            "Window Hardware": null,
            "Mirrors": null,
            "Clocks": null,
            "China": null,
            "Crystal": null,
            "Linens": null,
            "Silver ": null,
            "Flatware": null,
            "Paintings ": null,
            "Appliances ": null,
            "Cabinets and Contents ": null,
            "Wall Shelving": null,
            "China Cabinet": null,
            "Stove/Oven": null,
            "Refrigerator": null,
            "Dishwasher": null,
            "Utensils": null,
            "Cutlery": null,
            "Dishes ": null,
            "Glassware": null,
            "Freezer": null,
            "Microwave": null,
            "Rotisserie": null,
            "Food Processor": null,
            "Mixer": null,
            "Blender": null,
            "Radio": null,
            "Clock": null,
            "Television": null,
            "Ceiling Fan": null,
            "Cookbooks": null,
            "Foods": null,
            "Garbage Disposal": null,
            "Liquors": null,
            "Pots and Pans": null,
            "Small Appliances": null,
            "Telephone": null,
            "Washer": null,
            "Dryer": null,
            "Ironing Board": null,
            "Iron": null,
            "Closet Contents ": null,
            "Bookcases": null,
            "Books": null,
            "Compact Discs ": null,
            "Computer": null,
            "Couches": null,
            "Desk": null,
            "Drapes": null,
            "Electronic Games ": null,
            "Entertainment Centre": null,
            "Fireplace Equipment ": null,
            "Games/Toys ": null,
            "Hobby Equipment ": null,
            "Piano": null,
            "Pictures": null,
            "Tables": null,
            "VCR": null,
            "DVDs ": null,
            "DVD Player": null,
            "Tapes ": null,
            "Window Air Conditioner": null,
            "Whirlpool": null,
            "Hamper": null,
            "Hair Dryer": null,
            "Scale": null,
            "Shower Curtain": null,
            "Electric Razors": null,
            "Medications ": null,
            "Humidifier": null,
            "Pictures ": null,
            "Furniture ": null,
            "Bed": null,
            "Mattress/Box Spring": null,
            "Bedding": null,
            "Dressers": null,
            "Radios": null,
            "Nightstands": null,
            "Men’s Clothing ": null,
            "Women’s Clothing ": null,
            "Children’s Clothing ": null,
            "Shoes ": null,
            "Handbags ": null,
            "Vacuum Cleaner": null,
            "Auto Equipment ": null,
            "Bicycles": null,
            "Garden Furniture": null,
            "Garden Tools": null,
            "Lawn Furniture": null,
            "Power Tools ": null,
            "Sports Equipment ": null,
            "Storage Shelving": null,
            "Furniture": null,
            "Trunks": null,
            "Cameras": null,
            "Golf Equipment": null,
            "Ski Equipment": null,
            "Boating Equipment": null,
            "Paint Set": null,
            "Pool Table": null,
            "Exercise Equipment": null,
            "Hunting Equipment": null,
            "Fishing Equipment": null,
            "Stamp Collection": null,
            "Carving Set": null,
            "Sewing Machine": null,
            "Bowling Equipment": null,
            "Camping Equipment": null,
            "Games": null,
            "Ice Skating Equipment": null,
            "Tennis Equipment": null,
            "Home Computer": null,
            "Modem": null,
            "Hard Drive": null,
            "Scanner": null,
            "Printer": null,
            "Fax Machine": null,
            "Antiques": null,
            "Bracelets": null,
            "Brooches": null,
            "Central Air Conditioning Unit": null,
            "Central Heating Unit": null,
            "Earrings": null,
            "Fine Art": null,
            "Furs": null,
            "Hobby Collections": null,
            "Necklaces": null,
            "Other Jewellery": null,
            "Rings": null,
            "Watches": null,
            "Sculptures": null,
            "Handbags": null,
        },
        limit: 6,
    });
});
dragElement(document.getElementById("budgetmetermodala"));
dragElement(document.getElementById("right_click_modal"));

function dragElement(elmnt) {
    var pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.ontouchcancel = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchstart = elementDrag;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        setTimeout(function() {
            elmnt.style.top = "";
        }, 1000);
        return false;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var bedroom_qty, bedroom_name, bathroom_qty, bathroom_name, searcha, qtay, date;

function add() {
    $('.modal').modal('close');
    sm_page('ajax_loader', this, '');
    searcha = document.getElementById("tags").value.replace(/['"]+/g, '');
    qtay = document.getElementById("qty").value.replace(/['"]+/g, '');
    date = document.getElementById("date").value.replace(/['"]+/g, '');
    $("#div1").load("https://smartlist.ga/dashboard/resources/modal.php?name=" + encodeURI(searcha) + "&qty=" + encodeURI(qtay) + "&price=" + encodeURI(date) + "", null, function() {
        AJAX_LOAD('#Contact', './rooms/kitchen/view.php');
        document.getElementById("tags").value = null;
    });
}

function add_bathroom() {
    $('.modal').modal('close');
    sm_page('bathroom', this, '');
    AJAX_LOAD('#bathroom', './rooms/bathroom/view.php');
    bathroom_qty = document.getElementById("bathroom_qty_input").value.replace(/['"]+/g, '');
    bathroom_name = document.getElementById("bathroom_name_input").value.replace(/['"]+/g, '');
    document.getElementById("bathroom_name_input").value = null;
    document.getElementById("bathroom_qty_input").value = 1;
    if (document.getElementById('bathroom_table_var')) {
        document.getElementById('bathroom_table_var').style.display = 'none';
    }
    $("#div1").load("https://smartlist.ga/dashboard/rooms/bathroom/quickadd.php?name=" + encodeURI(bathroom_name) + "&qty=" + encodeURI(bathroom_qty) + "");
    $('html, body').scrollTop($(document).height());
}

function add_bedroom() {
    $('.modal').modal('close');
    sm_page('Home', this, '');
    AJAX_LOAD('#Home', './rooms/bedroom/view.php');
    bedroom_qty = document.getElementById("bedroom_qty_input").value.replace(/['"]+/g, '');
    bedroom_name = document.getElementById("bedroom_name_input").value.replace(/['"]+/g, '');
    document.getElementById("bedroom_name_input").value = null;
    document.getElementById("bedroom_qty_input").value = null;
    $("#bedroom_table").append("<tr class='card-new'id='BEDROOM_tr" + bedroom_name + " onclick='item(\"BEDROOM_IDENTIFY_BY_NAME\", \"" + bedroom_name + "\", \"" + bedroom_qty + "\", \"\", \"\", \"bedroom\")'><td>" + bedroom_name + "</td><td>" + bedroom_qty + "</td></tr>");
    if (document.getElementById('BEDROOM_VAR_COUNT')) {
        document.getElementById('BEDROOM_VAR_COUNT').style.display = 'none';
    }
    $("#div1").load("https://smartlist.ga/dashboard/rooms/bedroom/quickadd.php?name=" + encodeURI(bedroom_name) + "&qty=" + encodeURI(bedroom_qty) + "");
    $('html, body').scrollTop($(document).height());
}
$("#garage_form").submit(function(e) {
    sm_page('ajax_loader', this, '');
    e.preventDefault();
    var form = $(this);
    var url = form.attr('action');

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success: function(data) {
            sm_page('About', this, '');
            var n = document.getElementById("garage_name_input").value;
            var q = document.getElementById("garage_qty_input").value;
            $("#garage_table").append("<tr class='card-new'id='GARAGE_tr" + n.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_') + "' onclick='item(" + data + ", \"" + n.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_') + "\", \"" + q.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_') + "\", \"\", \"https://smartlist.ga/dashboard/rooms/garage/\", \"garage\")'><td>" + n + "</td><td>" + q + "</td></tr>");
            $('html, body').scrollTop($(document).height());
            document.getElementById("garage_form").reset();
        }
    });
});
history.pushState(null, null, 'https://smartlist.ga/dashboard/beta');
window.addEventListener('popstate', function(event) {
    history.pushState(null, null, 'https://smartlist.ga/dashboard/beta');
    $('.modal').modal('close');
    if (item_state == 'item_popup') {
        back();
        item_state = '1';
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.sidenav').sidenav('close');
    }
});
$(document).ready(function() {
    $('.sidenav a').css('pointer-events', 'unset');
    $('.sidenav a').css('opacity', '1');
    $('nav a').css('pointer-events', 'unset');
    $('nav a').css('opacity', '1');
});
$(document).ready(function() {
    var elems = document.querySelectorAll("input[type=range]");
    M.Range.init(elems);
});
document.getElementById('notification').addEventListener('click', function() {
    sm_page("notification_popup", this, "");
    AJAX_LOAD("#notification_popup", "./rooms/notifications.php");
    nav_title("Notifications");
    w_title("Notifications");
    document.getElementById("hide_notification").style.display = "none";
});
document.getElementById('search_toggle').addEventListener('click', function() {
    showsearch();
    document.getElementById('search').focus();
});
document.getElementById('account_pair_view').addEventListener('click', function() {
    AJAX_LOAD('#pairb', 'https://smartlist.ga/dashboard/resources/pairs.php')
});

function modal_open(id, el, room) {
    var __el1 = el.getElementsByTagName('td')[0].innerHTML;
    var __el2 = el.getElementsByTagName('td')[1].innerHTML;
    var directory;
    $('#right_click_modal').modal('open');
    document.getElementById('rclick_qr').href = 'https://api.qrserver.com/v1/create-qr-code/?size=850x850&data=' + __el1;
    document.getElementById('rclick_recipe').href = 'https://google.com/search/?q=' + encodeURI("Recipes with " + __el1);
    document.getElementById('rclick_mail').href = 'mailto:fakeemail@emailsender.net?subject=' + encodeURI("My inventory Status") + "&body=" + encodeURI("I currently have " + __el2 + " " + __el1 + " in my inventory");
    document.getElementById('rclick_share').onclick = function() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: "I'm currently having " + __el1 + " " + __el2 + " in my inventory.",
                url: window.location.href
            }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing:', error));
        }
    };
    document.getElementById('rclick_add').onclick = function() {
        $('#div1').load('./rooms/todo_qadd.php?name=' + encodeURI(__el1));
        M.toast({
            html: 'Item added successfully to grocery list'
        });
    };
    document.getElementById('rclick_edit').onclick = function() {
        edit_popup(el.getAttribute('data-id'), __el1, __el2, '', room);
    };
    switch (room) {
        case 'kitchen':
            directory = 'delete.php';
            break;
        case 'bathroom':
            directory = './rooms/bathroom/delete.php';
            break;
        case 'bedroom':
            directory = './rooms/bedroom/delete.php';
            break;
        case 'garage':
            directory = './rooms/garage/delete.php';
            break;
        case 'family':
            directory = './rooms/family/delete.php';
            break;
        case 'laundryroom':
            directory = './rooms/laundry/delete.php';
            break;
        case 'dining_room':
            directory = './rooms/dining_room/delete.php';
            break;
        case 'storage':
            directory = './rooms/storage/delete.php';
            break;
        case 'custom_room':
            directory = './rooms/custom_item_delete.php';
            break;
    }
    document.getElementById('rclick_delete').onclick = function() {
        $('#div1').load(directory + "?id=" + id);
        $(el).hide()
    };
}
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-S0PH6N0Z7E');
window.addEventListener('keyup', function(e) {
    if (e.keyCode == '187') {
        e.preventDefault();
        document.getElementById("FLOATING_ACTION_BUTTON").style.width = '130px';
        document.getElementById("FLOATING_ACTION_BUTTON").getElementsByTagName('i')[0].classList.remove('active_i');
        setTimeout(function() {
            document.getElementById("FLOATING_ACTION_BUTTON").getElementsByTagName('span')[0].style.opacity = 1;
        }, 200);
    }
});
$(document).ready(function() {
    garage.forEach(function(entry) {
        document.getElementById('garage_item').insertAdjacentHTML("beforebegin", ` <tr class="draggable" id="${entry.room}tr_${entry.id}" onclick='item(${entry.id}, ` + JSON.stringify(entry.name) + `, ` + JSON.stringify(entry.qty) + ` , ` + JSON.stringify(entry.price) + `,  ` + JSON.stringify(entry.directory) + `,  ` + JSON.stringify(entry.room) + `, ` + JSON.stringify(entry.star) + `)' ${entry.star == 1 ? 'style=\'border-left: 3px solid #f57f17\'' : ''}> <td>${entry.sync == true ? '<span class="sync">Synced</span>' : ''} ${entry.name} </td> <td> ${entry.qty} </td> </tr>`);
    });
    budgetmeter.forEach(function(entry) {
        document.getElementById('bm_items').insertAdjacentHTML("beforebegin", ` <tr> <td> ${entry.sync == true ? '<span class="sync">Synced</span>' : ''}` + entry.name + `  </td> <td> ${entry.qty} </td> <td><div class=\"dropdown\" tabindex='0'> <a class=\"dropbtn\" href=\"#!\" rel=\"nofollow\"><i class='material-icons'>more_vert</i></a> <div class=\"dropdown-contenta\"> <a href=\"https://smartlist.ga/dashboard/rooms/bedroom/edit.php?id=${entry.id}\" class='waves-effect'><i class='material-icons left' style="font-size: 20px">edit</i>Edit</a> <a onclick='$(\"#div1\").load(\"https://smartlist.ga/scalesize/bm/delete.php?id=${entry.id}\");this.parentElement.parentElement.parentElement.parentElement.style.display=\"none\";' class='waves-effect'><i class='material-icons left' style="font-size: 20px">delete</i>Delete</a> </div> </div></td> </tr>`);
    });
    sr_res.forEach(function(entry) {
        document.getElementById('sr_item').insertAdjacentHTML("beforebegin", ` <li class="collection-item waves-effect" onclick="sm_page('${entry.room == 'garage' ? 'About' : ''} ${entry.room == 'bedroom' ? 'Home' : ''} ${entry.room == 'storage' ? 'storage' : ''} ${entry.room == 'kitchen' ? 'Contact' : ''} ${entry.room == 'bathroom' ? 'bathroom' : ''}', this, '')"><a href="#!" >${entry.name}<span class=\"new badge red\">${entry.room == 'bedroom' ? 'bedroom' : ''}${entry.room == 'garage' ? 'Garage' : ''} ${entry.room == 'storage' ? 'Storage' : ''} ${entry.room == 'bathroom' ? 'Bathroom' : ''} ${entry.room == 'kitchen' ? 'Kitchen' : ''} ${entry.room == 'gl' ? 'Grocery List' : ''}</span></a></li>`);
    });
    $('#key').modal({
        endingTop: '50%'
    });
});

/*BEGIN Swipe*/
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var y = "1.6.12",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function(H) {
        var G = f(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (F && typeof H === "object") {
                F.option.apply(this, arguments)
            } else {
                if (!F && (typeof H === "object" || !H)) {
                    return w.apply(this, arguments)
                }
            }
        }
        return G
    };
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: i
    };

    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipe.defaults, F);
        return this.each(function() {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a4, au) {
        var au = f.extend({}, au);
        var az = (a || d || !au.fallbackToMouseEvents),
            K = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            ax = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = az ? null : "mouseleave",
            aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ag = 0,
            aP = null,
            ac = 0,
            a1 = 0,
            aZ = 0,
            H = 1,
            ap = 0,
            aJ = 0,
            N = null;
        var aR = f(a4);
        var aa = "start";
        var X = 0;
        var aQ = {};
        var U = 0,
            a2 = 0,
            a5 = 0,
            ay = 0,
            O = 0;
        var aW = null,
            af = null;
        try {
            aR.bind(K, aN);
            aR.bind(aD, a9)
        } catch (aj) {
            f.error("events not supported " + K + "," + aD + " on jQuery.swipe")
        }
        this.enable = function() {
            aR.bind(K, aN);
            aR.bind(aD, a9);
            return aR
        };
        this.disable = function() {
            aK();
            return aR
        };
        this.destroy = function() {
            aK();
            aR.data(C, null);
            aR = null
        };
        this.option = function(bc, bb) {
            if (typeof bc === "object") {
                au = f.extend(au, bc)
            } else {
                if (au[bc] !== undefined) {
                    if (bb === undefined) {
                        return au[bc]
                    } else {
                        au[bc] = bb
                    }
                } else {
                    if (!bc) {
                        return au
                    } else {
                        f.error("Option " + bc + " does not exist on jQuery.swipe.options")
                    }
                }
            }
            return null
        };

        function aN(bd) {
            if (aB()) {
                return
            }
            if (f(bd.target).closest(au.excludedElements, aR).length > 0) {
                return
            }
            var be = bd.originalEvent ? bd.originalEvent : bd;
            var bc, bf = be.touches,
                bb = bf ? bf[0] : be;
            aa = g;
            if (bf) {
                X = bf.length
            } else {
                if (au.preventDefaultEvents !== false) {
                    bd.preventDefault()
                }
            }
            ag = 0;
            aP = null;
            aJ = null;
            ac = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            ap = 0;
            N = ab();
            S();
            ai(0, bb);
            if (!bf || (X === au.fingers || au.fingers === i) || aX()) {
                U = ar();
                if (X == 2) {
                    ai(1, bf[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start)
                }
                if (au.swipeStatus || au.pinchStatus) {
                    bc = P(be, aa)
                }
            } else {
                bc = false
            }
            if (bc === false) {
                aa = q;
                P(be, aa);
                return bc
            } else {
                if (au.hold) {
                    af = setTimeout(f.proxy(function() {
                        aR.trigger("hold", [be.target]);
                        if (au.hold) {
                            bc = au.hold.call(aR, be, be.target)
                        }
                    }, this), au.longTapThreshold)
                }
                an(true)
            }
            return null
        }

        function a3(be) {
            var bh = be.originalEvent ? be.originalEvent : be;
            if (aa === h || aa === q || al()) {
                return
            }
            var bd, bi = bh.touches,
                bc = bi ? bi[0] : bh;
            var bf = aH(bc);
            a2 = ar();
            if (bi) {
                X = bi.length
            }
            if (au.hold) {
                clearTimeout(af)
            }
            aa = k;
            if (X == 2) {
                if (a1 == 0) {
                    ai(1, bi[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start)
                } else {
                    aH(bi[1]);
                    aZ = at(aQ[0].end, aQ[1].end);
                    aJ = aq(aQ[0].end, aQ[1].end)
                }
                H = a7(a1, aZ);
                ap = Math.abs(a1 - aZ)
            }
            if ((X === au.fingers || au.fingers === i) || !bi || aX()) {
                aP = aL(bf.start, bf.end);
                ak(be, aP);
                ag = aS(bf.start, bf.end);
                ac = aM();
                aI(aP, ag);
                if (au.swipeStatus || au.pinchStatus) {
                    bd = P(bh, aa)
                }
                if (!au.triggerOnTouchEnd || au.triggerOnTouchLeave) {
                    var bb = true;
                    if (au.triggerOnTouchLeave) {
                        var bg = aY(this);
                        bb = F(bf.end, bg)
                    }
                    if (!au.triggerOnTouchEnd && bb) {
                        aa = aC(k)
                    } else {
                        if (au.triggerOnTouchLeave && !bb) {
                            aa = aC(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bh, aa)
                    }
                }
            } else {
                aa = q;
                P(bh, aa)
            }
            if (bd === false) {
                aa = q;
                P(bh, aa)
            }
        }

        function M(bb) {
            var bc = bb.originalEvent ? bb.originalEvent : bb,
                bd = bc.touches;
            if (bd) {
                if (bd.length && !al()) {
                    G();
                    return true
                } else {
                    if (bd.length && al()) {
                        return true
                    }
                }
            }
            if (al()) {
                X = ay
            }
            a2 = ar();
            ac = aM();
            if (ba() || !am()) {
                aa = q;
                P(bc, aa)
            } else {
                if (au.triggerOnTouchEnd || (au.triggerOnTouchEnd == false && aa === k)) {
                    if (au.preventDefaultEvents !== false) {
                        bb.preventDefault()
                    }
                    aa = h;
                    P(bc, aa)
                } else {
                    if (!au.triggerOnTouchEnd && a6()) {
                        aa = h;
                        aF(bc, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bc, aa)
                        }
                    }
                }
            }
            an(false);
            return null
        }

        function a9() {
            X = 0;
            a2 = 0;
            U = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            S();
            an(false)
        }

        function L(bb) {
            var bc = bb.originalEvent ? bb.originalEvent : bb;
            if (au.triggerOnTouchLeave) {
                aa = aC(h);
                P(bc, aa)
            }
        }

        function aK() {
            aR.unbind(K, aN);
            aR.unbind(aD, a9);
            aR.unbind(ax, a3);
            aR.unbind(V, M);
            if (T) {
                aR.unbind(T, L)
            }
            an(false)
        }

        function aC(bf) {
            var be = bf;
            var bd = aA();
            var bc = am();
            var bb = ba();
            if (!bd || bb) {
                be = q
            } else {
                if (bc && bf == k && (!au.triggerOnTouchEnd || au.triggerOnTouchLeave)) {
                    be = h
                } else {
                    if (!bc && bf == h && au.triggerOnTouchLeave) {
                        be = q
                    }
                }
            }
            return be
        }

        function P(bd, bb) {
            var bc, be = bd.touches;
            if ((J() && W()) || (Q() && aX())) {
                if (J() && W()) {
                    bc = aF(bd, bb, l)
                }
                if ((Q() && aX()) && bc !== false) {
                    bc = aF(bd, bb, t)
                }
            } else {
                if (aG() && bc !== false) {
                    bc = aF(bd, bb, j)
                } else {
                    if (ao() && bc !== false) {
                        bc = aF(bd, bb, b)
                    } else {
                        if (ah() && bc !== false) {
                            bc = aF(bd, bb, B)
                        }
                    }
                }
            }
            if (bb === q) {
                if (W()) {
                    bc = aF(bd, bb, l)
                }
                if (aX()) {
                    bc = aF(bd, bb, t)
                }
                a9(bd)
            }
            if (bb === h) {
                if (be) {
                    if (!be.length) {
                        a9(bd)
                    }
                } else {
                    a9(bd)
                }
            }
            return bc
        }

        function aF(be, bb, bd) {
            var bc;
            if (bd == l) {
                aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ac || 0, X, aQ]);
                if (au.swipeStatus) {
                    bc = au.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ac || 0, X, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && aV()) {
                    aR.trigger("swipe", [aP, ag, ac, X, aQ]);
                    if (au.swipe) {
                        bc = au.swipe.call(aR, be, aP, ag, ac, X, aQ);
                        if (bc === false) {
                            return false
                        }
                    }
                    switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ac, X, aQ]);
                            if (au.swipeLeft) {
                                bc = au.swipeLeft.call(aR, be, aP, ag, ac, X, aQ)
                            }
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ac, X, aQ]);
                            if (au.swipeRight) {
                                bc = au.swipeRight.call(aR, be, aP, ag, ac, X, aQ)
                            }
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ac, X, aQ]);
                            if (au.swipeUp) {
                                bc = au.swipeUp.call(aR, be, aP, ag, ac, X, aQ)
                            }
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ac, X, aQ]);
                            if (au.swipeDown) {
                                bc = au.swipeDown.call(aR, be, aP, ag, ac, X, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == t) {
                aR.trigger("pinchStatus", [bb, aJ || null, ap || 0, ac || 0, X, H, aQ]);
                if (au.pinchStatus) {
                    bc = au.pinchStatus.call(aR, be, bb, aJ || null, ap || 0, ac || 0, X, H, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && a8()) {
                    switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, ap || 0, ac || 0, X, H, aQ]);
                            if (au.pinchIn) {
                                bc = au.pinchIn.call(aR, be, aJ || null, ap || 0, ac || 0, X, H, aQ)
                            }
                            break;
                        case A:
                            aR.trigger("pinchOut", [aJ || null, ap || 0, ac || 0, X, H, aQ]);
                            if (au.pinchOut) {
                                bc = au.pinchOut.call(aR, be, aJ || null, ap || 0, ac || 0, X, H, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == B) {
                if (bb === q || bb === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Z() && !I()) {
                        O = ar();
                        aW = setTimeout(f.proxy(function() {
                            O = null;
                            aR.trigger("tap", [be.target]);
                            if (au.tap) {
                                bc = au.tap.call(aR, be, be.target)
                            }
                        }, this), au.doubleTapThreshold)
                    } else {
                        O = null;
                        aR.trigger("tap", [be.target]);
                        if (au.tap) {
                            bc = au.tap.call(aR, be, be.target)
                        }
                    }
                }
            } else {
                if (bd == j) {
                    if (bb === q || bb === h) {
                        clearTimeout(aW);
                        O = null;
                        aR.trigger("doubletap", [be.target]);
                        if (au.doubleTap) {
                            bc = au.doubleTap.call(aR, be, be.target)
                        }
                    }
                } else {
                    if (bd == b) {
                        if (bb === q || bb === h) {
                            clearTimeout(aW);
                            O = null;
                            aR.trigger("longtap", [be.target]);
                            if (au.longTap) {
                                bc = au.longTap.call(aR, be, be.target)
                            }
                        }
                    }
                }
            }
            return bc
        }

        function am() {
            var bb = true;
            if (au.threshold !== null) {
                bb = ag >= au.threshold
            }
            return bb
        }

        function ba() {
            var bb = false;
            if (au.cancelThreshold !== null && aP !== null) {
                bb = (aT(aP) - ag) >= au.cancelThreshold
            }
            return bb
        }

        function ae() {
            if (au.pinchThreshold !== null) {
                return ap >= au.pinchThreshold
            }
            return true
        }

        function aA() {
            var bb;
            if (au.maxTimeThreshold) {
                if (ac >= au.maxTimeThreshold) {
                    bb = false
                } else {
                    bb = true
                }
            } else {
                bb = true
            }
            return bb
        }

        function ak(bb, bc) {
            if (au.preventDefaultEvents === false) {
                return
            }
            if (au.allowPageScroll === m) {
                bb.preventDefault()
            } else {
                var bd = au.allowPageScroll === s;
                switch (bc) {
                    case p:
                        if ((au.swipeLeft && bd) || (!bd && au.allowPageScroll != E)) {
                            bb.preventDefault()
                        }
                        break;
                    case o:
                        if ((au.swipeRight && bd) || (!bd && au.allowPageScroll != E)) {
                            bb.preventDefault()
                        }
                        break;
                    case e:
                        if ((au.swipeUp && bd) || (!bd && au.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break;
                    case x:
                        if ((au.swipeDown && bd) || (!bd && au.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break
                }
            }
        }

        function a8() {
            var bc = aO();
            var bb = Y();
            var bd = ae();
            return bc && bb && bd
        }

        function aX() {
            return !!(au.pinchStatus || au.pinchIn || au.pinchOut)
        }

        function Q() {
            return !!(a8() && aX())
        }

        function aV() {
            var be = aA();
            var bg = am();
            var bd = aO();
            var bb = Y();
            var bc = ba();
            var bf = !bc && bb && bd && bg && be;
            return bf
        }

        function W() {
            return !!(au.swipe || au.swipeStatus || au.swipeLeft || au.swipeRight || au.swipeUp || au.swipeDown)
        }

        function J() {
            return !!(aV() && W())
        }

        function aO() {
            return ((X === au.fingers || au.fingers === i) || !a)
        }

        function Y() {
            return aQ[0].end.x !== 0
        }

        function a6() {
            return !!(au.tap)
        }

        function Z() {
            return !!(au.doubleTap)
        }

        function aU() {
            return !!(au.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bb = ar();
            return (Z() && ((bb - O) <= au.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function aw() {
            return ((X === 1 || !a) && (isNaN(ag) || ag < au.threshold))
        }

        function a0() {
            return ((ac > au.longTapThreshold) && (ag < r))
        }

        function ah() {
            return !!(aw() && a6())
        }

        function aG() {
            return !!(R() && Z())
        }

        function ao() {
            return !!(a0() && aU())
        }

        function G() {
            a5 = ar();
            ay = event.touches.length + 1
        }

        function S() {
            a5 = 0;
            ay = 0
        }

        function al() {
            var bb = false;
            if (a5) {
                var bc = ar() - a5;
                if (bc <= au.fingerReleaseThreshold) {
                    bb = true
                }
            }
            return bb
        }

        function aB() {
            return !!(aR.data(C + "_intouch") === true)
        }

        function an(bb) {
            if (bb === true) {
                aR.bind(ax, a3);
                aR.bind(V, M);
                if (T) {
                    aR.bind(T, L)
                }
            } else {
                aR.unbind(ax, a3, false);
                aR.unbind(V, M, false);
                if (T) {
                    aR.unbind(T, L, false)
                }
            }
            aR.data(C + "_intouch", bb === true)
        }

        function ai(bd, bb) {
            var bc = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            bc.start.x = bc.end.x = bb.pageX || bb.clientX;
            bc.start.y = bc.end.y = bb.pageY || bb.clientY;
            aQ[bd] = bc;
            return bc
        }

        function aH(bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            var bc = ad(bd);
            if (bc === null) {
                bc = ai(bd, bb)
            }
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY;
            return bc
        }

        function ad(bb) {
            return aQ[bb] || null
        }

        function aI(bb, bc) {
            bc = Math.max(bc, aT(bb));
            N[bb].distance = bc
        }

        function aT(bb) {
            if (N[bb]) {
                return N[bb].distance
            }
            return undefined
        }

        function ab() {
            var bb = {};
            bb[p] = av(p);
            bb[o] = av(o);
            bb[e] = av(e);
            bb[x] = av(x);
            return bb
        }

        function av(bb) {
            return {
                direction: bb,
                distance: 0
            }
        }

        function aM() {
            return a2 - U
        }

        function at(be, bd) {
            var bc = Math.abs(be.x - bd.x);
            var bb = Math.abs(be.y - bd.y);
            return Math.round(Math.sqrt(bc * bc + bb * bb))
        }

        function a7(bb, bc) {
            var bd = (bc / bb) * 1;
            return bd.toFixed(2)
        }

        function aq() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aS(bc, bb) {
            return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)))
        }

        function aE(be, bc) {
            var bb = be.x - bc.x;
            var bg = bc.y - be.y;
            var bd = Math.atan2(bg, bb);
            var bf = Math.round(bd * 180 / Math.PI);
            if (bf < 0) {
                bf = 360 - Math.abs(bf)
            }
            return bf
        }

        function aL(bc, bb) {
            var bd = aE(bc, bb);
            if ((bd <= 45) && (bd >= 0)) {
                return p
            } else {
                if ((bd <= 360) && (bd >= 315)) {
                    return p
                } else {
                    if ((bd >= 135) && (bd <= 225)) {
                        return o
                    } else {
                        if ((bd > 45) && (bd < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function ar() {
            var bb = new Date();
            return bb.getTime()
        }

        function aY(bb) {
            bb = f(bb);
            var bd = bb.offset();
            var bc = {
                left: bd.left,
                right: bd.left + bb.outerWidth(),
                top: bd.top,
                bottom: bd.top + bb.outerHeight()
            };
            return bc
        }

        function F(bb, bc) {
            return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom)
        }
    }
}));

$(function() {
    //Enable swiping...
    $(".modal").swipe({
        //Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == "left") {
                //console.log("left swipe");
            }
            if (direction == "right") {
                //console.log("right swipe");
            }
            if (direction == "down") {
                // 	window.scrollBy(0,-300);
                $('.modal').modal('close');
            }
            if (direction == "up") {
                // 	window.scrollBy(0,300);
            }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });
});
/*END Swipe*/
function _settingsLoad(el, data) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("__SETTINGSPAGE");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    if ($(window).width() < 600) {
        document.getElementById('_settingsmenu').style.display = 'none';
        document.getElementById('capitalizeFirstLetter').onclick = function() {
            tablinks = document.querySelectorAll(".__sidebar a");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.boxShadow = "";
            }
            tabcontent = document.getElementsByClassName("__SETTINGSPAGE");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            document.getElementById('capitalizeFirstLetter').onclick = function() {
                sm_page('News', this, '')
            }
            document.getElementById('_settingsmenu').style.display = "block";
        }
    }
    tablinks = document.querySelectorAll(".__sidebar a");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.boxShadow = "";

    }
    document.getElementById('_smSettingsPage_' + data).style.display = "block";
    el.style.boxShadow = 'inset 2px 0px 0px 0px rgba(230,81,0,1)';
    if ($(window).width() < 600) {
        document.getElementById('capitalizeFirstLetter').style.display = "block"
    }
}
$(document).ready(function() {
    if ($(window).width() > 600) {
        document.getElementById('__def').click();
    }
});
//addEventListener polyfill 1.0 / Eirik Backer / MIT Licence
(function(win, doc) {
    if (win.addEventListener) return; //No need to polyfill

    function docHijack(p) {
        var old = doc[p];
        doc[p] = function(v) {
            return addListen(old(v))
        }
    }

    function addEvent(on, fn, self) {
        return (self = this).attachEvent('on' + on, function(e) {
            var e = e || win.event;
            e.preventDefault = e.preventDefault || function() {
                e.returnValue = false
            }
            e.stopPropagation = e.stopPropagation || function() {
                e.cancelBubble = true
            }
            fn.call(self, e);
        });
    }

    function addListen(obj, i) {
        if (i = obj.length)
            while (i--) obj[i].addEventListener = addEvent;
        else obj.addEventListener = addEvent;
        return obj;
    }

    addListen([doc, win]);
    if ('Element' in win) win.Element.prototype.addEventListener = addEvent; //IE8
    else { //IE < 8
        doc.attachEvent('onreadystatechange', function() {
            addListen(doc.all)
        }); //Make sure we also init at domReady
        docHijack('getElementsByTagName');
        docHijack('getElementById');
        docHijack('createElement');
        addListen(doc.all);
    }
})(window, document);

function sidenav_highlight(el) {
    var els = document.querySelectorAll('.sidenav-active');
    if (els) {
        for (i = 0; i < els.length; i++) {
            els[i].classList.remove('sidenav-active')
        }
    }
    el.classList.add('sidenav-active');
}

function change_title(data) {
    w_title(data);
    nav_title(data)
}

function bedroom_chip(el) {
    var x = document.getElementById('bedroom_name_input');
    x.value = el.getElementsByTagName('span')[0].innerHTML;
    x.focus();
    document.getElementById('bedroom_qty_input').focus()
}
window.addEventListener('load', function() {
    sidenav_highlight(document.getElementById('defaultOpen'));
});
document.getElementById('pair_account_modal').addEventListener('click', function() {
    sm_page("pair2")
});
document.getElementById('test_notifications').addEventListener('click', function() {
    desktop_ping('Success!', 'Notifications are enabled!');
});
document.getElementById('scroll_sidenav_to_top').addEventListener('click', function() {
    $('#slide-out').scrollTop(0);
});
document.getElementById('search_close').addEventListener('click', showsearch);
document.getElementById('kitchen_add_icon').addEventListener('click', function() {
    sm_page('addkitchen', this);
    setTimeout(function() {
        document.getElementById('tags').focus()
    }, 0500);
});
