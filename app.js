    window.onload = function () {
        'use strict';

        try {
            var tt, iDB, req, db,
                qS = document.querySelector.bind(document),
                qSa = document.querySelectorAll.bind(document),
                dtt = '._npo',
                ar = [],
                iO, gM,
                aOc = [35, 22, 211],
                dbVersion = 4,
                createObjStore, delEV, upEV, saveToDB, prm,
                lra = [qS('._npt'), qS(dtt)],
                _0x55 = function (nb) {
                    nb = this;
                    var objStore = db.transaction("__YColrsDB", "readwrite").objectStore("__YColrsDB");
                    objStore.openCursor().onsuccess = function (ev) {
                        var cursor = ev.target.result;
                        //if more cursor to go keep running this  code
                        if (cursor) {
                            var up = cursor.value;
                            if (nb == 'gc') {
                                aOc = up.__yncolr;
                                if (up.__yndkth == '_dkm') {
                                    qS('input[type="checkbox"]').checked = !0;
                                    _0x35.call([qS('._r_h'), _0x545()]);
                                } else _0x24();
                            } else {
                                (undefined !== nb && nb.search(/dkm/ig) != -1) ?
                                up.__yndkth = nb: up.__yncolr = aOc;
                                var req = cursor.update(up);
                                req.onsuccess = function () {
                                    // _0x3621.call('[*] Theme updated...');
                                };
                                req.onerror = function () {
                                    _0x3621.call("[!] Couldn't set new theme, retry...");
                                }
                            }

                        } else {
                            var transaction = db.transaction(["__YColrsDB"], "readwrite");
                            transaction.onerror = function () {
                                _0x3621.call('[!] Sorry, an error occured, retry...');

                            };
                            // call an object store that's already been added to the database
                            var objStore = transaction.objectStore("__YColrsDB");
                            var objStoreReq = objStore.add({
                                __yndkth: '_ndkm',
                                __yncolr: aOc
                            });
                        }
                    }
                },
                _0x35 = function (at, dto) {
                    at = this[0];
                    dto = this[1];
                    if (qS('input[type="checkbox"]').checked) {
                        _0x144.call(['remove', [at, at.parentNode.children[0]],
                            ['_chkf']
                        ]);
                        _0x144.call(['add', dto,
                            ['_dkm']
                        ]);
                        _0x55.call('_dkm');
                    } else {
                        _0x144.call(['add', [at, at.parentNode.children[0]],
                            ['_chkf']
                        ]);
                        _0x144.call(['remove', dto,
                            ['_dkm']
                        ]);
                        _0x24(), _0x55.call('_ndkm');
                    }
                },
                _0x545 = function () {
                    return [
                        qSa(dtt + '_no'),
                        qSa(dtt + '_b'),
                        qSa(dtt + '_h'),
                        qSa(dtt + '_n'),
                        qS('._r_s_bg'),
                        qS('._main'),
                        qS('._b_n'),
                        qS('._s_p'),
                        qSa('._hb'),
                        qS('._r_h'),
                        qS('._w_n'),
                        qS('._fa'),
                        qS('._abc')
                    ];
                },
                _0x24 = function (t, c) {
                    t = _0x545();
                    gM = Math.max(aOc[0], aOc[1], aOc[2]);

                    // ._bd,npo_no,_s_p
                    _0x274.call([t[5], aOc]);
                    _0x274.call([t[0], aOc]);
                    _0x274.call([t[7], aOc]);

                    // hold max index
                    iO = aOc.indexOf(gM);

                    // npo_b, npo_n, _hb
                    aOc[iO] = gM - 20;
                    _0x274.call([t[1], aOc]);
                    _0x274.call([t[3], aOc]);
                    _0x274.call([t[8], aOc]);

                    // npo_h,_fa,_abc
                    aOc[iO] = gM + 10;
                    _0x274.call([t[2], aOc]);
                    _0x274.call([t[11], aOc]);
                    _0x274.call([t[12], aOc]);

                    aOc[iO] = gM + 40;

                    c = "background-color: rgb(" + aOc[0] + ',' + aOc[1] + ',' + aOc[2] + ");}";
                    qS('._stl').innerHTML = "._npo_b::-webkit-scrollbar-thumb{" +
                        c + "._w_n::-webkit-scrollbar-thumb{" + c + ar.join('');
                    ar = [], aOc[iO] = gM;
                },
                _0x274 = function (at, ct) {
                    at = this;
                    if (at[0].length > 0) {
                        for (var x = 0; x < at[0].length; x++) {
                            ct = "." + at[0][x].classList[0] +
                                "{background-color:" + "rgb(" + at[1][0] + ", " + at[1][1] + ", " + at[1][2] +
                                ");}";
                            (ar[ar.indexOf(ct)] !== ct) ? ar.push(ct): null;
                        }
                    } else {
                        if (at[0].style !== undefined) {
                            ct = "." + at[0].classList[0] +
                                "{ background-color:" + " rgb(" + at[1][0] + ", " + at[1][1] + ", " + at[1][2] +
                                "); }";
                            (ar[ar.indexOf(ct)] !== ct) ? ar.push(ct): null;
                        }
                    }
                },
                _0x3621 = function () {
                    qS('._fa').innerHTML = this;
                    qS('._fa').classList.remove('slu');
                    qS('._fa').classList.add('sld');
                    setTimeout(function () {
                        qS('._fa').classList.remove('sld');
                        qS('._fa').classList.add('slu');
                    }, 3000);
                },
                _0x144 = function (at) {
                    at = this;
                    for (var i = 0; i < at[1].length; i++) {
                        if (at[0] == 'add') {
                            if ('object' === typeof at[1][i] && (at[1][i]).length > 0) {
                                for (var x = 0; x < at[1][i].length; x++) {
                                    at[1][i][x].classList.add(at[2][0]);
                                }
                            } else(at[1][i].classList !== undefined) ? at[1][i].classList.add(at[2][0]) : null;
                        } else {
                            if ('object' === typeof at[1][i] && (at[1][i]).length > 0) {
                                for (var x = 0; x < at[1][i].length; x++) {
                                    at[1][i][x].classList.remove(at[2][0]);
                                }
                            } else(at[1][i].classList !== undefined) ? at[1][i].classList.remove(at[2][0]) : null;

                        }

                    }
                },
                _0x155 = function (at) {
                    at = this;
                    (at[0] == '_0x215') ?
                    at[1].setAttribute(at[2], at[3]):
                        (at[0] == '_0x415' && !at[3]) ?
                        at[1].removeAttribute(at[2]) : null;
                },
                /* handling the slide left and right of the note box */
                _0x14 = function (at) {
                    try {
                        at = this;
                        at[0].classList.remove('mgl');
                        at[1].classList.add('mgl');
                        if (undefined !== at[2] && at[2][0] == 'txtv') {
                            at[0].children[1].children[0].style.cursor = "not-allowed";
                            at[0].children[1].children[0].disabled = !0;
                            at[0].children[1].children[0].value = at[2][1];
                            _0x155.call(['_0x215', lra[0].children[1].children[0], 'xre', at[2][2]]);
                            _0x155.call(['_0x215', lra[0].children[1].children[0], 'spellcheck', 'false']);
                        } else if (undefined !== at[2] && at[2][0] == 'bk') {
                            _0x37();
                        } else {
                            _0x37();
                            setTimeout(function () {
                                at[0].children[1].children[0].focus();
                            }, 1000);
                        }
                    } catch (e) {}
                },
                _0x37 = function () {
                    if (lra[0].children[1].children[0].hasAttribute('disabled')) {
                        _0x155.call(['_0x215', lra[0].children[1].children[0], 'xrn', '']);
                        _0x155.call(['_0x215', lra[0].children[1].children[0], 'spellcheck', 'true']);
                        _0x155.call(['_0x415', lra[0].children[1].children[0], 'style']);
                        lra[0].children[1].children[0].disabled = !1;
                        lra[0].children[1].children[0].focus();
                    }
                },
                _0x216 = function () {
                    tt = qS('._w_n').value.trim();
                    if (!tt == '') {
                        if (lra[0].children[1].children[0].hasAttribute('xre')) {
                            upEV.call([lra[0].children[1].children[0].getAttribute('xre'), tt]);
                        } else {
                            prm = prompt("Note's Title: ");
                            var rgxd = ((new Date().toString().split('GMT')[0]).trim()).split(' ');
                            var rgxm = ((rgxd[rgxd.length - 1]).match(/[0-9]*/)[0]);
                            var rgxt = (rgxm > 12) ? rgxm - 12 : rgxm;
                            var rgxh = ((rgxd[rgxd.length - 1])).split(':');
                            var rgxr = (rgxm >= 12) ? 'pm' : 'am';
                            rgxh[0] = rgxt, rgxd.pop(), rgxd.push(rgxh.join(':')), rgxd.push(rgxr);
                            if (prm !== null && prm.trim() !== '') {
                                saveToDB.call([{
                                    __yniden: Math.random(Math.random() + 3),
                                    __yntitl: prm.trim(),
                                    __yndata: tt,
                                    __yndate: rgxd.join(' ')
                                }]);
                            }
                        }
                    } else _0x3621.call('[!] Can\'t save an empty note, please write your note');
                };

            // IndexedDB
            iDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB;

            //create/open db
            req = iDB.open("__YNotesDB", dbVersion);

            req.onerror = function () {
                _0x3621.call('error loading database, refresh page');
            };

            req.onsuccess = function () {
                // store the data gotten from the opened database to the db var
                db = req.result;
                // populate page with the data from the opened db
                getNotes();
                _0x55.call('gc');
            };

            // needed by recent browsers
            req.onupgradeneeded = function (ev) {
                db = ev.target.result; //var was here
                db.onerror = function () {
                    _0x3621.call('error loading database, refresh page');
                };
                createObjStore(db);
            };

            createObjStore = function (dbase) {
                //createObjStore
                var objStore = dbase.createObjectStore("__YColrsDB", {
                    autoIncrement: !0
                });
                objStore.createIndex("__yndkth", "__yndkth", {
                    unique: !1
                });
                objStore.createIndex("__yncolr", "__yncolr", {
                    unique: !1
                });

                var objStore = dbase.createObjectStore("__YNotesDB", {
                    keyPath: "__yniden",
                    autoIncrement: !0
                });
                objStore.createIndex("__yntitl", "__yntitl", {
                    unique: !1
                });
                objStore.createIndex("__yndata", "__yndata", {
                    unique: !1
                });
                objStore.createIndex("__yndate", "__yndate", {
                    unique: !1
                });
            };

            qS('._r_h').onclick = function (dto, at) {
                at = this;
                dto = _0x545();
                qS('input[type="checkbox"]').click();
                setTimeout(function () {
                    _0x35.call([at, dto]);
                }, 100);
            }
            qS('._a_n').onclick = function () {
                _0x14.call([lra[0], lra[1]]);
                _0x155.call(['_0x215', lra[0].children[1].children[0], 'xrn', '']);
                lra[0].children[1].children[0].value = "";
            }
            qS('._s_t').onclick = function () {
                qS('._s_p_f').classList.add('ssp'), chkO();
            }
            qS('._b_n').onclick = function () {
                if (lra[0].children[1].children[0].hasAttribute('xrn') && !qS('._w_n').value.trim() == '') {
                    prm = confirm("Do you want to discard this note? ");
                    if (prm !== null && prm) {
                        _0x14.call([lra[1], lra[0],
                            ['bk']
                        ]);
                        _0x155.call(['_0x415', lra[0].children[1].children[0], 'xre']);
                        _0x155.call(['_0x415', lra[0].children[1].children[0], 'xrn']);
                    }
                } else {
                    _0x14.call([lra[1], lra[0],
                        ['bk']
                    ]);
                    _0x155.call(['_0x415', lra[0].children[1].children[0], 'xre']);
                    _0x155.call(['_0x415', lra[0].children[1].children[0], 'xrn']);
                }


            }
            qS('._e_n').onclick = _0x37;
            qS('._s_n').onclick = _0x216;
            qS('._ab').onclick = function () {
                qS('._abc_w').style.display = "block";
                qS('._s_p_f').classList.remove('ssp');
            }
            qS('._rt').onclick = function () {
                if (!qS('body').classList.contains('_dkm')) {
                    setTimeout(function () {
                        aOc = [
                            Math.floor(Math.random() * 255),
                            Math.floor(Math.random() * 255),
                            Math.floor(Math.random() * 255)
                        ], _0x24(), _0x55();
                    }, 100);
                }
            }

            // grab notes from db
            function getNotes(dd, ce, nb) {
                nb = this, qS('._npo_b').innerHTML = "";
                // open our object store and get all the data type items in the IDB
                var objStore = db.transaction("__YNotesDB").objectStore("__YNotesDB");
                var n = 0;
                objStore.openCursor().onsuccess = function (ev) {
                    var cursor = ev.target.result;
                    //if more cursor to go keep running this  code
                    if (cursor) {
                        var __yntitl = cursor.value.__yntitl;
                        ce = document.createElement('div');
                        dd = '<div class="_npo_cn"' + 'data-tid="' + cursor.value.__yniden + '"' + 'title="View Note">' +
                            '<div class="_npo_t">' + cursor.value.__yntitl +
                            '</div><div class="_npo_c">' + cursor.value.__yndate +
                            '</div></div>' +
                            '<div class="_npo_d">' +
                            '<span class="material-icons _d_n" title="Delete">close</span>' +
                            '</div>';
                        ce.classList.add('_npo_no');
                        (qS('._bd').classList.contains('_dkm')) ? ce.classList.add('_dkm'): null;
                        ce.innerHTML = dd;
                        qS('._npo_b').appendChild(ce);
                        qSa('._d_n')[n].onclick = function (ev) {
                            (confirm("Are you sure you want to delete \"" + __yntitl + "\" note?")) ?
                            delEV(ev): null;
                        };
                        qSa('._npo_cn')[n].onclick = function () {
                            var tid = parseFloat(this.getAttribute('data-tid'));
                            var tr = db.transaction("__YNotesDB", "readwrite");
                            var objStore = tr.objectStore("__YNotesDB").get(tid);
                            objStore.onsuccess = function () {
                                _0x14.call([lra[0], lra[1],
                                    ['txtv', this.result.__yndata, tid]
                                ]);
                            }
                        }
                        n++;
                        cursor.continue();
                    } else {
                        if (n == 0) {
                            qS('._npo_b').innerHTML = "<div style='text-align:center;'>Aww!, no notes found (-_-)</div>";
                        }
                    }
                }
            }

            saveToDB = function (nb) {
                nb = this;
                var transaction = db.transaction(["__YNotesDB"], "readwrite");
                transaction.oncomplete = function () {
                    getNotes();
                }
                transaction.onerror = function () {
                    _0x3621.call('[!] Sorry, an error occured, retry...');

                };
                // call an object store that's already been added to the database
                var objStore = transaction.objectStore("__YNotesDB");
                var objStoreReq = objStore.add(nb[0]);
                objStoreReq.onsuccess = function () {
                    _0x3621.call("[*] Successfully saved note");
                    _0x155.call(['_0x415', lra[0].children[1].children[0], 'xrn']);
                    _0x14.call([lra[1], lra[0],
                        ['bk']
                    ]);
                };
            };

            delEV = function (ev) {
                try {
                    // retrieve the name of the task we want to delete
                    var tid = ev.target.parentNode.parentNode.children[0].getAttribute('data-tid');
                    // open a database transaction and devare the task, finding it by the name we retrieved above

                    var tr = db.transaction("__YNotesDB", "readwrite");
                    tr.objectStore("__YNotesDB").delete(parseFloat(tid));

                    // report that the data item has been deleted
                    tr.oncomplete = function () {
                        // delete the parent of the button, which is the list item, so it no longer is displayed
                        ev.target.parentNode.parentNode.remove(), getNotes();
                        _0x3621.call('[*] Successfully deleted the note');
                    };
                    tr.onerror = function () {
                        _0x3621.call("[!] Sorry couldn't delete note, retry...");
                    }
                } catch (e) {
                    _0x3621.call(e);

                }
            };

            upEV = function (nb) {
                nb = this;
                var objStore = db.transaction("__YNotesDB", "readwrite").objectStore("__YNotesDB");
                objStore.openCursor().onsuccess = function (ev) {
                    var cursor = ev.target.result;
                    //if more cursor to go keep running this  code
                    if (cursor) {
                        if (cursor.value.__yniden == nb[0] && !(cursor.value.__yndata == nb[1])) {
                            var up = cursor.value;
                            up.__yndata = nb[1];
                            var req = cursor.update(up);
                            req.onsuccess = function () {
                                _0x3621.call("[*] Successfully updated the note");
                                _0x155.call(['_0x415', lra[0].children[1].children[0], 'xre']);
                                _0x155.call(['_0x415', lra[0].children[1].children[0], 'xrn']);
                                _0x14.call([lra[1], lra[0]]);
                            };
                            req.onerror = function () {
                                _0x3621.call("[!] Couldn't update the note, retry...");
                            }
                        } else _0x3621.call('[!] Nothing new added to your note');
                        cursor.continue();
                    }
                }
            }

            function chkO() {
                window.onclick = function (e) {
                    ((e.target.matches('.ssp')) || (e.target.matches('._s_p_b')) &&
                        this.getComputedStyle(e.target).display == 'block') ?
                    qS('._s_p_f').classList.remove('ssp'): null;

                    ((e.target.matches('._abc_w'))) ?
                    qS('._abc_w').style.display = "none": null;
                }
            }
            qS('._w_n').onkeydown = function (e) {
                if (e.ctrlKey && e.key == "s") {
                    e.preventDefault(), _0x216();;
                }
            }
            setTimeout(() => {
                document.body.classList.add('_bd');
            }, 1000);        } catch (e) {
            console.log(e);
        }
    }