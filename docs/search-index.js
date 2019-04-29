var N=null,E="",T="t",U="u",searchIndex={};
var R=["scuttlebutt","encrypt","block","result","error","usize","kilobits","Return the count in kilobits.","A marker trait denoting that the given scheme is…","to_owned","clone_into","try_from","borrow_mut","try_into","into_bits","from_cast","from_bits","type_id","to_string","initialize","borrow","typeid","scuttlebutt::cointoss","scuttlebutt::comm","default","ordering","block512","partial_cmp","formatter","bitxor_assign","Block512","TrackReader","TrackWriter"];

searchIndex[R[0]]={"doc":"The `scuttlebutt` multi-party computation utilities…","i":[[3,"Aes128",R[0],"AES-128, encryption only.",N,N],[3,"Aes256",E,"AES-256, encryption only.",N,N],[3,"Block",E,"A 128-bit chunk.",N,N],[12,"0",E,E,0,N],[3,R[30],E,"A 512-bit value.",N,N],[3,"AesHash",E,"AES-based correlation-robust hash function.",N,N],[3,"AesRng",E,"Implementation of a random number generator based on…",N,N],[11,"new",E,"Create a new `Aes128` object, using `key` as the AES key.",1,[[[R[2]]],["self"]]],[11,R[1],E,"Encrypt a block, outputting the ciphertext.",1,[[["self"],[R[2]]],[R[2]]]],[11,"encrypt4",E,"Encrypt four blocks at a time, outputting the ciphertexts.",1,[[["self"]]]],[11,"encrypt8",E,"Encrypt eight blocks at a time, outputting the ciphertexts.",1,[[["self"]]]],[11,"new",E,"Make a new `Aes256` object with key `key`.",2,[[],["self"]]],[11,R[1],E,"Encrypt block `m`.",2,[[["self"],[R[2]]],[R[2]]]],[11,"as_ptr",E,"Convert into a pointer.",0,[[["self"]]]],[11,"as_mut_ptr",E,"Convert into a mutable pointer.",0,[[["self"]]]],[11,"clmul",E,"Carryless multiplication.",0,[[]]],[11,"hash_pt",E,"Hash an elliptic curve point `pt` and tweak `tweak`.",0,[[[R[5]],["ristrettopoint"]],["self"]]],[11,"write",E,"Write a block to `stream`.",0,[[[T],["self"]],[[R[4]],[R[5]],[R[3],[R[5],R[4]]]]]],[11,"read",E,"Read a block from `stream`.",0,[[[T]],[[R[3],[R[2],R[4]]],[R[2]],[R[4]]]]],[11,"color_bit",E,"Return the \"color\" bit (when viewing `Block` as a wire…",0,[[["self"]],["bool"]]],[11,"set_color_bit",E,"Set the \"color\" bit (when viewing `Block` as a wire label).",0,[[["self"]],[R[2]]]],[11,"flip",E,"Flip all bits.",0,[[["self"]],["self"]]],[11,"read",E,"Read a `Block512` from `reader`.",3,[[["r"]],[[R[3],[R[4]]],[R[4]]]]],[11,"write",E,"Write a `Block512` to `writer`.",3,[[["self"],["w"]],[[R[3],[R[4]]],[R[4]]]]],[11,"prefix",E,"Return the first `n` bytes, where `n` must be `<= 64`.",3,[[["self"],[R[5]]]]],[11,"prefix_mut",E,"Return the first `n` bytes as mutable, where `n` must be…",3,[[["self"],[R[5]]]]],[0,"cointoss",E,"Implementation of a simple two-party coin tossing protocol…",N,N],[4,"Error",R[22],"Errors produced by the coin tossing protocol.",N,N],[13,"IoError",E,"An I/O error occurred.",4,N],[13,"CommitmentCheckFailed",E,"The commitment check failed.",4,N],[5,"send",E,"Coin tossing sender.",N,[[["r"],["w"]],[["vec",[R[2]]],[R[3],["vec",R[4]]],[R[4]]]]],[5,"receive",E,"Coin tossing receiver.",N,[[["r"],["w"]],[["vec",[R[2]]],[R[3],["vec",R[4]]],[R[4]]]]],[0,"comm",R[0],"A module for useful communication-related objects.",N,N],[3,R[31],R[23],"An object for tracking the number of bits read from a…",N,N],[3,R[32],E,"An object for tracking the number of bits written to a…",N,N],[11,"new",E,"Make a new `TrackReader` from an inner `Read` object.",5,[[["r"]],["self"]]],[11,"clear",E,"Clear the count of bits read.",5,[[["self"]]]],[11,"count",E,"Return the count of bits read.",5,[[["self"]],[R[5]]]],[11,R[6],E,R[7],5,[[["self"]],["f64"]]],[11,"new",E,"Make a new `TrackWriter` from an inner `Write` object.",6,[[["w"]],["self"]]],[11,"clear",E,"Clear the count of bits written.",6,[[["self"]]]],[11,"count",E,"Return the count of bits written.",6,[[["self"]],[R[5]]]],[11,R[6],E,R[7],6,[[["self"]],["f64"]]],[11,"new",R[0],"Initialize the hash function using `key`.",7,[[[R[2]]],["self"]]],[11,"cr_hash",E,"Correlation-robust hash function for 128-bit inputs (cf.…",7,[[["self"],[R[2]]],[R[2]]]],[11,"ccr_hash",E,"Circular correlation-robust hash function (cf.…",7,[[["self"],[R[2]]],[R[2]]]],[11,"tccr_hash",E,"Tweakable circular correlation robust hash function (cf.…",7,[[["self"],[R[2]]],[R[2]]]],[11,"new",E,"Create a new random number generator using a random seed…",8,[[],["self"]]],[11,"fork",E,"Create a new RNG using a random seed from this one.",8,[[["self"]],["self"]]],[0,"utils",E,"Useful utility functions.",N,N],[5,"xor","scuttlebutt::utils","XOR two byte arrays, outputting the result.",N,[[],[["vec",["u8"]],["u8"]]]],[5,"xor_n",E,"XOR two byte arrays up to `n` bytes, outputting the result.",N,[[[R[5]]],[["vec",["u8"]],["u8"]]]],[5,"xor_inplace",E,"XOR two byte arrays in place.",N,[[]]],[5,"xor_inplace_n",E,"XOR two byte arrays up to `n` bytes in place.",N,[[[R[5]]]]],[5,"and",E,"AND two byte arrays, outputting the result.",N,[[],[["vec",["u8"]],["u8"]]]],[5,"and_inplace",E,"AND two byte arrays in place.",N,[[]]],[17,"FIXED_KEY_AES128",R[0],"Fixed-key AES-128.",N,N],[17,"AES_HASH",E,"`AesHash` with a fixed key.",N,N],[8,"SemiHonest",E,R[8],N,N],[8,"Malicious",E,R[8],N,N],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[9],E,E,1,[[["self"]],[T]]],[11,R[10],E,E,1,[[[T],["self"]]]],[11,R[11],E,E,1,[[[U]],[R[3]]]],[11,R[20],E,E,1,[[["self"]],[T]]],[11,R[17],E,E,1,[[["self"]],[R[21]]]],[11,R[12],E,E,1,[[["self"]],[T]]],[11,R[13],E,E,1,[[],[R[3]]]],[11,R[14],E,E,1,[[],[U]]],[11,R[15],E,E,1,[[[T]],[T]]],[11,"cast",E,E,1,[[],[U]]],[11,R[16],E,E,1,[[[T]],[T]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[9],E,E,2,[[["self"]],[T]]],[11,R[10],E,E,2,[[[T],["self"]]]],[11,R[11],E,E,2,[[[U]],[R[3]]]],[11,R[20],E,E,2,[[["self"]],[T]]],[11,R[17],E,E,2,[[["self"]],[R[21]]]],[11,R[12],E,E,2,[[["self"]],[T]]],[11,R[13],E,E,2,[[],[R[3]]]],[11,R[14],E,E,2,[[],[U]]],[11,R[15],E,E,2,[[[T]],[T]]],[11,"cast",E,E,2,[[],[U]]],[11,R[16],E,E,2,[[[T]],[T]]],[11,R[18],E,E,0,[[["self"]],["string"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[9],E,E,0,[[["self"]],[T]]],[11,R[10],E,E,0,[[[T],["self"]]]],[11,R[11],E,E,0,[[[U]],[R[3]]]],[11,R[20],E,E,0,[[["self"]],[T]]],[11,R[17],E,E,0,[[["self"]],[R[21]]]],[11,R[12],E,E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[],[R[3]]]],[11,R[14],E,E,0,[[],[U]]],[11,"clear",E,E,0,[[["self"]]]],[11,R[19],E,E,0,[[]]],[11,R[15],E,E,0,[[[T]],[T]]],[11,"cast",E,E,0,[[],[U]]],[11,R[16],E,E,0,[[[T]],[T]]],[11,R[18],E,E,3,[[["self"]],["string"]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[9],E,E,3,[[["self"]],[T]]],[11,R[10],E,E,3,[[[T],["self"]]]],[11,R[11],E,E,3,[[[U]],[R[3]]]],[11,R[20],E,E,3,[[["self"]],[T]]],[11,R[17],E,E,3,[[["self"]],[R[21]]]],[11,R[12],E,E,3,[[["self"]],[T]]],[11,R[13],E,E,3,[[],[R[3]]]],[11,R[14],E,E,3,[[],[U]]],[11,"clear",E,E,3,[[["self"]]]],[11,R[19],E,E,3,[[]]],[11,R[15],E,E,3,[[[T]],[T]]],[11,"cast",E,E,3,[[],[U]]],[11,R[16],E,E,3,[[[T]],[T]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[11],E,E,7,[[[U]],[R[3]]]],[11,R[20],E,E,7,[[["self"]],[T]]],[11,R[17],E,E,7,[[["self"]],[R[21]]]],[11,R[12],E,E,7,[[["self"]],[T]]],[11,R[13],E,E,7,[[],[R[3]]]],[11,R[14],E,E,7,[[],[U]]],[11,R[15],E,E,7,[[[T]],[T]]],[11,"cast",E,E,7,[[],[U]]],[11,R[16],E,E,7,[[[T]],[T]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[9],E,E,8,[[["self"]],[T]]],[11,R[10],E,E,8,[[[T],["self"]]]],[11,R[11],E,E,8,[[[U]],[R[3]]]],[11,R[20],E,E,8,[[["self"]],[T]]],[11,R[17],E,E,8,[[["self"]],[R[21]]]],[11,R[12],E,E,8,[[["self"]],[T]]],[11,R[13],E,E,8,[[],[R[3]]]],[11,R[14],E,E,8,[[],[U]]],[11,"clear",E,E,8,[[["self"]]]],[11,R[19],E,E,8,[[]]],[11,R[15],E,E,8,[[[T]],[T]]],[11,"cast",E,E,8,[[],[U]]],[11,R[16],E,E,8,[[[T]],[T]]],[11,"from_entropy",E,E,8,[[],["r"]]],[11,R[18],R[22],E,4,[[["self"]],["string"]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[11],E,E,4,[[[U]],[R[3]]]],[11,R[20],E,E,4,[[["self"]],[T]]],[11,R[17],E,E,4,[[["self"]],[R[21]]]],[11,R[12],E,E,4,[[["self"]],[T]]],[11,R[13],E,E,4,[[],[R[3]]]],[11,R[14],E,E,4,[[],[U]]],[11,R[15],E,E,4,[[[T]],[T]]],[11,"cast",E,E,4,[[],[U]]],[11,R[16],E,E,4,[[[T]],[T]]],[11,"from",R[23],E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[11],E,E,5,[[[U]],[R[3]]]],[11,R[20],E,E,5,[[["self"]],[T]]],[11,R[17],E,E,5,[[["self"]],[R[21]]]],[11,R[12],E,E,5,[[["self"]],[T]]],[11,R[13],E,E,5,[[],[R[3]]]],[11,R[14],E,E,5,[[],[U]]],[11,R[15],E,E,5,[[[T]],[T]]],[11,"cast",E,E,5,[[],[U]]],[11,R[16],E,E,5,[[[T]],[T]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[11],E,E,6,[[[U]],[R[3]]]],[11,R[20],E,E,6,[[["self"]],[T]]],[11,R[17],E,E,6,[[["self"]],[R[21]]]],[11,R[12],E,E,6,[[["self"]],[T]]],[11,R[13],E,E,6,[[],[R[3]]]],[11,R[14],E,E,6,[[],[U]]],[11,R[15],E,E,6,[[[T]],[T]]],[11,"cast",E,E,6,[[],[U]]],[11,R[16],E,E,6,[[[T]],[T]]],[11,"as_ref",R[0],E,0,[[["self"]]]],[11,"as_ref",E,E,3,[[["self"]]]],[11,R[24],E,E,0,[[],["self"]]],[11,R[24],E,E,3,[[],["self"]]],[11,R[24],E,E,8,[[],["self"]]],[11,"clone",E,E,1,[[["self"]],["aes128"]]],[11,"clone",E,E,2,[[["self"]],["aes256"]]],[11,"clone",E,E,0,[[["self"]],[R[2]]]],[11,"clone",E,E,3,[[["self"]],[R[26]]]],[11,"clone",E,E,8,[[["self"]],["aesrng"]]],[11,"cmp",E,E,0,[[["self"]],[R[25]]]],[11,"cmp",E,E,3,[[["self"]],[R[25]]]],[11,"from",E,E,0,[[["u128"]],["self"]]],[11,"from",E,E,0,[[["__m128i"]],["self"]]],[11,"from",E,E,0,[[],["self"]]],[11,"from",E,E,3,[[],[R[26]]]],[11,"from",E,E,3,[[],[R[26]]]],[11,"from",E,E,3,[[],[R[26]]]],[11,"from",E,E,3,[[["__m512i"]],[R[26]]]],[11,"from",R[22],E,4,[[[R[4]]],["self"]]],[11,R[27],R[0],E,0,[[["self"]],[["option",[R[25]]],[R[25]]]]],[11,R[27],E,E,3,[[["self"]],[["option",[R[25]]],[R[25]]]]],[11,"as_mut",E,E,0,[[["self"]]]],[11,"as_mut",E,E,3,[[["self"]]]],[11,"eq",E,E,0,[[[R[2]],["self"]],["bool"]]],[11,"eq",E,E,3,[[["self"],[R[26]]],["bool"]]],[11,"fmt",E,E,0,[[[R[28]],["self"]],[R[3]]]],[11,"fmt",E,E,3,[[[R[28]],["self"]],[R[3]]]],[11,"fmt",R[22],E,4,[[[R[28]],["self"]],[R[3]]]],[11,"fmt",R[0],E,0,[[[R[28]],["self"]],[R[3]]]],[11,"fmt",E,E,3,[[[R[28]],["self"]],[R[3]]]],[11,"fmt",R[22],E,4,[[["self"],[R[28]]],[R[3]]]],[11,"fmt",R[23],E,5,[[["self"],[R[28]]],[R[3]]]],[11,"fmt",E,E,6,[[["self"],[R[28]]],[R[3]]]],[11,"fmt",R[0],E,8,[[["self"],[R[28]]],[R[3]]]],[11,"bitxor",E,E,0,[[],["self"]]],[11,"bitxor",E,E,3,[[],["self"]]],[11,R[29],E,E,0,[[["self"]]]],[11,R[29],E,E,3,[[["self"]]]],[11,"hash",E,E,0,[[["self"],["h"]]]],[11,"hash",E,E,3,[[["self"],["h"]]]],[11,R[11],E,E,3,[[],[R[3]]]],[11,"read",R[23],E,5,[[["self"]],[[R[3],[R[5]]],[R[5]]]]],[11,"write",E,E,6,[[["self"]],[[R[3],[R[5]]],[R[5]]]]],[11,"flush",E,E,6,[[["self"]],[R[3]]]],[11,"next_u32",R[0],E,8,[[["self"]],["u32"]]],[11,"next_u64",E,E,8,[[["self"]],["u64"]]],[11,"fill_bytes",E,E,8,[[["self"]]]],[11,"try_fill_bytes",E,E,8,[[["self"]],[[R[4]],[R[3],[R[4]]]]]],[11,"from_seed",E,E,8,[[],["self"]]],[11,"from_rng",E,E,8,[[["rngcore"]],[[R[4]],[R[3],[R[4]]]]]],[11,"serialize",E,E,0,[[["self"],["serializer"]],[R[3]]]],[11,"deserialize",E,E,0,[[["deserializer"]],[R[3]]]]],"p":[[3,"Block"],[3,"Aes128"],[3,"Aes256"],[3,R[30]],[4,"Error"],[3,R[31]],[3,R[32]],[3,"AesHash"],[3,"AesRng"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);