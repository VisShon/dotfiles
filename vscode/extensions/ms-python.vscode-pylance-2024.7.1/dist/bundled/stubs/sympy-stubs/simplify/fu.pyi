from typing import Any, Callable, Literal

from sympy import SYMPY_DEBUG
from sympy.series.order import Order

def TR0(rv): ...
def TR1(rv): ...
def TR2(rv): ...
def TR2i(rv, half=...): ...
def TR3(rv): ...
def TR4(rv): ...
def TR5(rv, max=..., pow=...): ...
def TR6(rv, max=..., pow=...): ...
def TR7(rv): ...
def TR8(rv, first=...): ...
def TR9(rv): ...
def TR10(rv, first=...): ...
def TR10i(rv): ...
def TR11(rv, base=...): ...
def TR12(rv, first=...): ...
def TR12i(rv): ...
def TR13(rv): ...
def TRmorrie(rv): ...
def TR14(rv, first=...): ...
def TR15(rv, max=..., pow=...): ...
def TR16(rv, max=..., pow=...): ...
def TR111(rv): ...
def TR22(rv, max=..., pow=...): ...
def TRpower(rv): ...
def L(rv): ...

if SYMPY_DEBUG:
    ...
CTR1 = ...
CTR2 = ...
CTR3 = ...
CTR4 = ...
RL1 = ...
RL2 = ...

def fu(rv, measure=...): ...
def process_common_addends(rv, do, key2=..., key1=...) -> Order: ...

fufuncs = ...
FU = ...
_ROOT2 = ...

def trig_split(a, b, two=...): ...
def as_f_sign_1(e) -> tuple[Any, Any, Any] | tuple[Any | Order, Any | Order, Literal[1, -1]] | None: ...
def hyper_as_trig(rv) -> tuple[Any, Callable[..., Any]]: ...
def sincos_to_sum(expr): ...
