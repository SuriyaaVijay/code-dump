; GCD OF TWO NUMBERS
section .data
    nl db "", 10
    nllen equ $-nl

    ask db 'Enter: '
    asklen equ $-ask

    show db 'GCD: '
    showlen equ $-show

    zero db '0'
    zerolen equ $-zero

    one db '1'
    onelen equ $-one


; WRITE MACRO
%macro write 2
    mov eax, 4
    mov ebx, 1
    mov ecx, %1
    mov edx, %2
    int 80h
%endmacro

; READ MACRO
%macro read 2
    mov eax, 3
    mov ebx, 2
    mov ecx, %1
    mov edx, %2
    int 80h
%endmacro

; NEWLINE MACRO
%macro endl 0
    mov eax, 4
    mov ebx, 1
    mov ecx, nl
    mov edx, nllen
    int 80h
%endmacro

; DECLARE VARIABLES
section .bss
    a resb 1
    b resb 1
    c resb 1
    gcd resb 1


section .text
    global _start
_start:

    write ask, asklen
    read a, 2
    write ask, asklen
    read b, 2
    write ask, asklen
    read c, 2

    mov al, [a]
    mov bl, [b]

    sub al, '0'
    sub bl, '0'

    call GCD

    mov bl, [c]
    sub bl, '0'

    call GCD

    add al, '0'
    mov [gcd], al

    write show, showlen
    write gcd, 1
    endl

    ; EXIT CALL
    mov eax, 1
    mov ebx, 0
    int 80h

GCD:
    ; the foll code is the edge case
    cmp al, 0
    je escape_0_al
    cmp bl, 0
    je escape_0_bl
    cmp al, 1
    je escape_1
    cmp bl, 1
    je escape_1

    ; exchange to put bigger number in al
    cmp al, bl
    jg a_greater

    xchg al, bl

    a_greater:
        xor ah, ah
        div bl
        cmp ah, 0
        jz exit

        xchg ah, bl
    jmp GCD

    escape_0_al:
        mov al, bl
        jmp exit
    
    escape_0_bl:
        jmp exit
    
    escape_1:
        mov al, 1

    exit:     
ret