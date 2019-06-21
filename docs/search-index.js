var N=null,E="",T="t",U="u",searchIndex={};
var R=["ocelot::oprf","Sender","Receiver","result","error","Runs any one-time initialization.","receive","ocelot","ocelot::ot","Oblivious transfer sender.","Oblivious transfer receiver.","Trait for one-out-of-two oblivious transfer from the…","Message type, restricted to types that are…","Runs any one-time initialization to create the oblivious…","Trait for one-out-of-two correlated oblivious transfer…","Trait for one-out-of-two random oblivious transfer from…","ocelot::oprf::kkrt","try_from","try_into","borrow_mut","into_bits","from_cast","from_bits","type_id","ocelot::oprf::kmprt","borrow","typeid","ocelot::ot::alsz","to_string","ocelot::ot::chou_orlandi","string","ocelot::ot::dummy","ocelot::ot::kos","ocelot::ot::naor_pinkas","send_correlated","receive_correlated","send_random","receive_random","formatter","ObliviousPrf","CorrelatedSender","CorrelatedReceiver","RandomSender","RandomReceiver"];

searchIndex["ocelot"]={"doc":"`ocelot`: A rust library for oblivious transfer ","i":[[4,"Error",R[7],"Errors produced by `ocelot`.",N,N],[13,"InvalidInputLength",E,"The input length is invalid.",0,N],[13,"IoError",E,"An I/O error has occurred.",0,N],[13,"Other",E,"Some other error, given by `String`.",0,N],[13,"CoinTossError",E,"Coin tossing failed.",0,N],[0,"oprf",E,"Oblivious PRF traits + instantiations.",N,N],[0,"kkrt",R[0],"Implementation of the batched, related-key oblivious…",N,N],[3,R[1],R[16],"KKRT oblivious PRF sender.",N,N],[3,R[2],E,"KKRT oblivious PRF receiver.",N,N],[11,"encode",E,"Encode `input` into `output`. This is not the same as the…",1,[[["self"]]]],[0,"kmprt",R[0],"Implementation of the hash-based multi-use OPPRF of…",N,N],[3,R[1],R[24],"KMPRT hashing-based OPPRF sender.",N,N],[3,R[2],E,"KMPRT oblivious programmable PRF receiver.",N,N],[11,"init",E,"Initialize the OPPRF sender.",2,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"send",E,"Run the OPPRF for `ninputs` inputs with the pairs given in…",2,[[["self"],["rng"],["usize"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"init",E,"Initialize the OPPRF receiver.",3,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,R[6],E,"Run the OPPRF on inputs provided by the `inputs` slice.",3,[[["self"],["rng"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec",["block512"]]]]],[6,"KkrtSender",R[0],"KKRT oblivious PRF sender using ALSZ OT extension with…",N,N],[6,"KkrtReceiver",E,"KKRT oblivious PRF receiver using ALSZ OT extension with…",N,N],[6,"KmprtSender",E,"KMPRT hash-based OPPRF sender, using KKRT as the…",N,N],[6,"KmprtReceiver",E,"KMPRT hash-based OPPRF receiver, using KKRT as the…",N,N],[8,R[39],E,"Trait containing the associated types used by an oblivious…",N,N],[16,"Seed",E,"PRF seed.",4,N],[16,"Input",E,"PRF input.",4,N],[16,"Output",E,"PRF output.",4,N],[8,R[1],E,"Trait for an oblivious PRF sender.",N,N],[10,"init",E,R[5],5,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[10,"send",E,"Runs `m` OPRF instances as the sender, returning the OPRF…",5,[[["self"],["rng"],["usize"],["c"]],[[R[3],["vec",R[4]]],[R[4]],["vec"]]]],[10,"compute",E,"Computes the oblivious PRF on seed `seed` and input `input`.",5,[[["self"]]]],[8,R[2],E,"Trait for an oblivious PRF receiver.",N,N],[10,"init",E,R[5],6,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[10,R[6],E,"Runs the oblivious PRF on inputs `inputs`, returning the…",6,[[["self"],["rng"],["c"]],[["vec"],[R[3],["vec",R[4]]],[R[4]]]]],[0,"ot",R[7],"Oblivious transfer traits + instantiations.",N,N],[0,"alsz",R[8],"Implementation of the Asharov-Lindell-Schneider-Zohner…",N,N],[3,R[1],R[27],R[9],N,N],[3,R[2],E,R[10],N,N],[0,"chou_orlandi",R[8],"Implementation of the Chou-Orlandi oblivious transfer…",N,N],[3,R[1],R[29],R[9],N,N],[3,R[2],E,R[10],N,N],[0,"dummy",R[8],"Implementation of an entirely insecure oblivious transfer…",N,N],[3,R[1],R[31],R[9],N,N],[3,R[2],E,R[10],N,N],[0,"kos",R[8],"Implementation of the Keller-Orsini-Scholl oblivious…",N,N],[3,R[1],R[32],"Oblivious transfer extension sender.",N,N],[3,R[2],E,"Oblivious transfer extension receiver.",N,N],[0,"naor_pinkas",R[8],"Implementation of the Naor-Pinkas oblivious transfer…",N,N],[3,R[1],R[33],R[9],N,N],[3,R[2],E,R[10],N,N],[6,"ChouOrlandiSender",R[8],"Instantiation of the Chou-Orlandi OT sender.",N,N],[6,"ChouOrlandiReceiver",E,"Instantiation of the Chou-Orlandi OT receiver.",N,N],[6,"DummySender",E,"Instantiation of the dummy OT sender.",N,N],[6,"DummyReceiver",E,"Instantiation of the dummy OT receiver.",N,N],[6,"NaorPinkasSender",E,"Instantiation of the Naor-Pinkas OT sender.",N,N],[6,"NaorPinkasReceiver",E,"Instantiation of the Naor-Pinkas OT receiver.",N,N],[6,"AlszSender",E,"Instantiation of the ALSZ OT extension sender, using…",N,N],[6,"AlszReceiver",E,"Instantiation of the ALSZ OT extension receiver, using…",N,N],[6,"KosSender",E,"Instantiation of the KOS OT extension sender, using…",N,N],[6,"KosReceiver",E,"Instantiation of the KOS OT extension receiver, using…",N,N],[8,R[1],E,R[11],N,N],[16,"Msg",E,R[12],7,N],[10,"init",E,R[13],7,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[10,"send",E,"Sends messages.",7,[[["self"],["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[8,R[2],E,R[11],N,N],[16,"Msg",E,R[12],8,N],[10,"init",E,R[13],8,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[10,R[6],E,"Receives messages.",8,[[["self"],["rng"],["c"]],[[R[3],["vec",R[4]]],["vec"],[R[4]]]]],[8,R[40],E,R[14],N,N],[10,R[34],E,"Correlated oblivious transfer send. Takes as input an…",9,[[["self"],["rng"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec"]]]],[8,R[41],E,R[14],N,N],[10,R[35],E,"Correlated oblivious transfer receive.",10,[[["self"],["rng"],["c"]],[[R[3],["vec",R[4]]],["vec"],[R[4]]]]],[8,R[42],E,R[15],N,N],[10,R[36],E,"Random oblivious transfer send. Returns a vector of tuples…",11,[[["self"],["rng"],["usize"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec"]]]],[8,R[43],E,R[15],N,N],[10,R[37],E,"Random oblivious transfer receive.",12,[[["self"],["rng"],["c"]],[[R[3],["vec",R[4]]],["vec"],[R[4]]]]],[11,"into",R[7],E,0,[[],[U]]],[11,R[28],E,E,0,[[["self"]],[R[30]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[17],E,E,0,[[[U]],[R[3]]]],[11,R[18],E,E,0,[[],[R[3]]]],[11,R[19],E,E,0,[[["self"]],[T]]],[11,R[25],E,E,0,[[["self"]],[T]]],[11,R[23],E,E,0,[[["self"]],[R[26]]]],[11,R[20],E,E,0,[[],[U]]],[11,R[21],E,E,0,[[[T]],[T]]],[11,"cast",E,E,0,[[],[U]]],[11,R[22],E,E,0,[[[T]],[T]]],[11,"into",R[16],E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[17],E,E,1,[[[U]],[R[3]]]],[11,R[18],E,E,1,[[],[R[3]]]],[11,R[19],E,E,1,[[["self"]],[T]]],[11,R[25],E,E,1,[[["self"]],[T]]],[11,R[23],E,E,1,[[["self"]],[R[26]]]],[11,R[20],E,E,1,[[],[U]]],[11,R[21],E,E,1,[[[T]],[T]]],[11,"cast",E,E,1,[[],[U]]],[11,R[22],E,E,1,[[[T]],[T]]],[11,"into",E,E,13,[[],[U]]],[11,"from",E,E,13,[[[T]],[T]]],[11,R[17],E,E,13,[[[U]],[R[3]]]],[11,R[18],E,E,13,[[],[R[3]]]],[11,R[19],E,E,13,[[["self"]],[T]]],[11,R[25],E,E,13,[[["self"]],[T]]],[11,R[23],E,E,13,[[["self"]],[R[26]]]],[11,R[20],E,E,13,[[],[U]]],[11,R[21],E,E,13,[[[T]],[T]]],[11,"cast",E,E,13,[[],[U]]],[11,R[22],E,E,13,[[[T]],[T]]],[11,"into",R[24],E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[17],E,E,2,[[[U]],[R[3]]]],[11,R[18],E,E,2,[[],[R[3]]]],[11,R[19],E,E,2,[[["self"]],[T]]],[11,R[25],E,E,2,[[["self"]],[T]]],[11,R[23],E,E,2,[[["self"]],[R[26]]]],[11,R[20],E,E,2,[[],[U]]],[11,R[21],E,E,2,[[[T]],[T]]],[11,"cast",E,E,2,[[],[U]]],[11,R[22],E,E,2,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[17],E,E,3,[[[U]],[R[3]]]],[11,R[18],E,E,3,[[],[R[3]]]],[11,R[19],E,E,3,[[["self"]],[T]]],[11,R[25],E,E,3,[[["self"]],[T]]],[11,R[23],E,E,3,[[["self"]],[R[26]]]],[11,R[20],E,E,3,[[],[U]]],[11,R[21],E,E,3,[[[T]],[T]]],[11,"cast",E,E,3,[[],[U]]],[11,R[22],E,E,3,[[[T]],[T]]],[11,"into",R[27],E,14,[[],[U]]],[11,R[28],E,E,14,[[["self"]],[R[30]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,R[17],E,E,14,[[[U]],[R[3]]]],[11,R[18],E,E,14,[[],[R[3]]]],[11,R[19],E,E,14,[[["self"]],[T]]],[11,R[25],E,E,14,[[["self"]],[T]]],[11,R[23],E,E,14,[[["self"]],[R[26]]]],[11,R[20],E,E,14,[[],[U]]],[11,R[21],E,E,14,[[[T]],[T]]],[11,"cast",E,E,14,[[],[U]]],[11,R[22],E,E,14,[[[T]],[T]]],[11,"into",E,E,15,[[],[U]]],[11,R[28],E,E,15,[[["self"]],[R[30]]]],[11,"from",E,E,15,[[[T]],[T]]],[11,R[17],E,E,15,[[[U]],[R[3]]]],[11,R[18],E,E,15,[[],[R[3]]]],[11,R[19],E,E,15,[[["self"]],[T]]],[11,R[25],E,E,15,[[["self"]],[T]]],[11,R[23],E,E,15,[[["self"]],[R[26]]]],[11,R[20],E,E,15,[[],[U]]],[11,R[21],E,E,15,[[[T]],[T]]],[11,"cast",E,E,15,[[],[U]]],[11,R[22],E,E,15,[[[T]],[T]]],[11,"into",R[29],E,16,[[],[U]]],[11,R[28],E,E,16,[[["self"]],[R[30]]]],[11,"from",E,E,16,[[[T]],[T]]],[11,R[17],E,E,16,[[[U]],[R[3]]]],[11,R[18],E,E,16,[[],[R[3]]]],[11,R[19],E,E,16,[[["self"]],[T]]],[11,R[25],E,E,16,[[["self"]],[T]]],[11,R[23],E,E,16,[[["self"]],[R[26]]]],[11,R[20],E,E,16,[[],[U]]],[11,R[21],E,E,16,[[[T]],[T]]],[11,"cast",E,E,16,[[],[U]]],[11,R[22],E,E,16,[[[T]],[T]]],[11,"into",E,E,17,[[],[U]]],[11,R[28],E,E,17,[[["self"]],[R[30]]]],[11,"from",E,E,17,[[[T]],[T]]],[11,R[17],E,E,17,[[[U]],[R[3]]]],[11,R[18],E,E,17,[[],[R[3]]]],[11,R[19],E,E,17,[[["self"]],[T]]],[11,R[25],E,E,17,[[["self"]],[T]]],[11,R[23],E,E,17,[[["self"]],[R[26]]]],[11,R[20],E,E,17,[[],[U]]],[11,R[21],E,E,17,[[[T]],[T]]],[11,"cast",E,E,17,[[],[U]]],[11,R[22],E,E,17,[[[T]],[T]]],[11,"into",R[31],E,18,[[],[U]]],[11,R[28],E,E,18,[[["self"]],[R[30]]]],[11,"from",E,E,18,[[[T]],[T]]],[11,R[17],E,E,18,[[[U]],[R[3]]]],[11,R[18],E,E,18,[[],[R[3]]]],[11,R[19],E,E,18,[[["self"]],[T]]],[11,R[25],E,E,18,[[["self"]],[T]]],[11,R[23],E,E,18,[[["self"]],[R[26]]]],[11,R[20],E,E,18,[[],[U]]],[11,R[21],E,E,18,[[[T]],[T]]],[11,"cast",E,E,18,[[],[U]]],[11,R[22],E,E,18,[[[T]],[T]]],[11,"into",E,E,19,[[],[U]]],[11,R[28],E,E,19,[[["self"]],[R[30]]]],[11,"from",E,E,19,[[[T]],[T]]],[11,R[17],E,E,19,[[[U]],[R[3]]]],[11,R[18],E,E,19,[[],[R[3]]]],[11,R[19],E,E,19,[[["self"]],[T]]],[11,R[25],E,E,19,[[["self"]],[T]]],[11,R[23],E,E,19,[[["self"]],[R[26]]]],[11,R[20],E,E,19,[[],[U]]],[11,R[21],E,E,19,[[[T]],[T]]],[11,"cast",E,E,19,[[],[U]]],[11,R[22],E,E,19,[[[T]],[T]]],[11,"into",R[32],E,20,[[],[U]]],[11,R[28],E,E,20,[[["self"]],[R[30]]]],[11,"from",E,E,20,[[[T]],[T]]],[11,R[17],E,E,20,[[[U]],[R[3]]]],[11,R[18],E,E,20,[[],[R[3]]]],[11,R[19],E,E,20,[[["self"]],[T]]],[11,R[25],E,E,20,[[["self"]],[T]]],[11,R[23],E,E,20,[[["self"]],[R[26]]]],[11,R[20],E,E,20,[[],[U]]],[11,R[21],E,E,20,[[[T]],[T]]],[11,"cast",E,E,20,[[],[U]]],[11,R[22],E,E,20,[[[T]],[T]]],[11,"into",E,E,21,[[],[U]]],[11,R[28],E,E,21,[[["self"]],[R[30]]]],[11,"from",E,E,21,[[[T]],[T]]],[11,R[17],E,E,21,[[[U]],[R[3]]]],[11,R[18],E,E,21,[[],[R[3]]]],[11,R[19],E,E,21,[[["self"]],[T]]],[11,R[25],E,E,21,[[["self"]],[T]]],[11,R[23],E,E,21,[[["self"]],[R[26]]]],[11,R[20],E,E,21,[[],[U]]],[11,R[21],E,E,21,[[[T]],[T]]],[11,"cast",E,E,21,[[],[U]]],[11,R[22],E,E,21,[[[T]],[T]]],[11,"into",R[33],E,22,[[],[U]]],[11,R[28],E,E,22,[[["self"]],[R[30]]]],[11,"from",E,E,22,[[[T]],[T]]],[11,R[17],E,E,22,[[[U]],[R[3]]]],[11,R[18],E,E,22,[[],[R[3]]]],[11,R[19],E,E,22,[[["self"]],[T]]],[11,R[25],E,E,22,[[["self"]],[T]]],[11,R[23],E,E,22,[[["self"]],[R[26]]]],[11,R[20],E,E,22,[[],[U]]],[11,R[21],E,E,22,[[[T]],[T]]],[11,"cast",E,E,22,[[],[U]]],[11,R[22],E,E,22,[[[T]],[T]]],[11,"into",E,E,23,[[],[U]]],[11,R[28],E,E,23,[[["self"]],[R[30]]]],[11,"from",E,E,23,[[[T]],[T]]],[11,R[17],E,E,23,[[[U]],[R[3]]]],[11,R[18],E,E,23,[[],[R[3]]]],[11,R[19],E,E,23,[[["self"]],[T]]],[11,R[25],E,E,23,[[["self"]],[T]]],[11,R[23],E,E,23,[[["self"]],[R[26]]]],[11,R[20],E,E,23,[[],[U]]],[11,R[21],E,E,23,[[[T]],[T]]],[11,"cast",E,E,23,[[],[U]]],[11,R[22],E,E,23,[[[T]],[T]]],[11,"init",R[16],E,1,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"send",E,E,1,[[["self"],["rng"],["usize"],["c"]],[[R[3],["vec",R[4]]],[R[4]],["vec"]]]],[11,"compute",E,E,1,[[["self"]]]],[11,"init",E,E,13,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,R[6],E,E,13,[[["self"],["rng"],["c"]],[["vec"],[R[3],["vec",R[4]]],[R[4]]]]],[11,"init",R[27],E,14,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"send",E,E,14,[[["self"],["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"init",R[29],E,16,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"send",E,E,16,[[["self"],["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"init",R[31],E,18,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"send",E,E,18,[[["self"],["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"init",R[32],E,20,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"send",E,E,20,[[["self"],["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"init",R[33],E,22,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"send",E,E,22,[[["self"],["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,"init",R[27],E,15,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,R[6],E,E,15,[[["self"],["rng"],["c"]],[[R[3],["vec",R[4]]],["vec"],[R[4]]]]],[11,"init",R[29],E,17,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,R[6],E,E,17,[[["self"],["rng"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec",["block"]]]]],[11,"init",R[31],E,19,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,R[6],E,E,19,[[["self"],["rng"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec",["block"]]]]],[11,"init",R[32],E,21,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,R[6],E,E,21,[[["self"],["rng"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec",["block"]]]]],[11,"init",R[33],E,23,[[["rng"],["c"]],[[R[3],[R[4]]],[R[4]]]]],[11,R[6],E,E,23,[[["self"],["rng"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec",["block"]]]]],[11,R[34],R[27],E,14,[[["self"],["rng"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec"]]]],[11,R[34],R[32],E,20,[[["self"],["rng"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec"]]]],[11,R[35],R[27],E,15,[[["self"],["rng"],["c"]],[[R[3],["vec",R[4]]],["vec"],[R[4]]]]],[11,R[35],R[32],E,21,[[["self"],["rng"],["c"]],[[R[3],["vec",R[4]]],["vec"],[R[4]]]]],[11,R[36],R[27],E,14,[[["self"],["rng"],["usize"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec"]]]],[11,R[36],R[32],E,20,[[["self"],["rng"],["usize"],["c"]],[[R[4]],[R[3],["vec",R[4]]],["vec"]]]],[11,R[37],R[27],E,15,[[["self"],["rng"],["c"]],[[R[3],["vec",R[4]]],["vec"],[R[4]]]]],[11,R[37],R[32],E,21,[[["self"],["rng"],["c"]],[[R[3],["vec",R[4]]],["vec"],[R[4]]]]],[11,"from",R[7],E,0,[[[R[4]]],[R[4]]]],[11,"from",E,E,0,[[[R[4]]],[R[4]]]],[11,"fmt",E,E,0,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",R[27],E,14,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",E,E,15,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",R[29],E,16,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",E,E,17,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",R[31],E,18,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",E,E,19,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",R[32],E,20,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",E,E,21,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",R[33],E,22,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",E,E,23,[[["self"],[R[38]]],[R[3]]]],[11,"fmt",R[7],E,0,[[["self"],[R[38]]],[R[3]]]]],"p":[[4,"Error"],[3,R[1]],[3,R[1]],[3,R[2]],[8,R[39]],[8,R[1]],[8,R[2]],[8,R[1]],[8,R[2]],[8,R[40]],[8,R[41]],[8,R[42]],[8,R[43]],[3,R[2]],[3,R[1]],[3,R[2]],[3,R[1]],[3,R[2]],[3,R[1]],[3,R[2]],[3,R[1]],[3,R[2]],[3,R[1]],[3,R[2]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);