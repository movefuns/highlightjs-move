/*
Language: move
Author: Yusong Wang <admin@wangyusong.com>
Contributors: Yusong Wang <admin@wangyusong.com>
Website:
Category: common, system
*/

/** @type LanguageFn */
export default function move(hljs) {
    //const regex = hljs.regex;

    const KEYWORDS = [
        "abort",
        "acquires",
        "has",
        "as",
        "break",
        "continue",
        "copy",
        "drop",
        "key",
        "mut",
        "store",
        "define",
        "else",
        "false",
        "fun",
        "if",
        "invariant",
        "let",
        "loop",
        "module",
        "entry",
        "move",
        "native",
        "public",
        "const",
        "return",
        "spec",
        "struct",
        "true",
        "use",
        "while"
    ];

    const LITERALS = [
        "true",
        "false"
    ];

    const BUILTINS = [
        "move_to_sender",
        "borrow_global",
        "emit_event",
        "borrow_global_mut",
        "has",
        "move_from",
        "exists",
    ];

    const TYPES = [
        "u8",
        "u64",
        "u128",
        "u256",
        "vector",
        "address",
        "bool"
    ];

    return {
        name: 'move',
        aliases: ['move'],
        keywords: {
            $pattern: hljs.IDENT_RE + '!?',
            type: TYPES,
            keyword: KEYWORDS,
            literal: LITERALS,
            built_in: BUILTINS
        },
        illegal: '</',
        contains: []
    };
}

//export registerLanguage("move", move)