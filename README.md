<p align="center">
  <img src="./assets/efrei-klaus-logo.png"/>
</p>

## <a name='TOC'>đ Summary</a>

- [Rules](#rules)
- [Overview](#overview)
- [Stack](#stack)
- [Credits](#credits)

## <a name='overview'>đŽđžâ Rules</a>
=================

Hi, voici quelques rĂ¨gles pour mener Ă  bien ce projet :)

* Ce projet DOIT ĂŞtre faire tout seul
* Le sujet est en franĂ§ais mais votre code DOIT ĂŞtre en anglais [`classe`, `variable`, etc.]
* Vous DEVEZ crĂŠer un dĂŠpot git pour ce projet
* Vous DEVEZ crĂŠer un diagramme `UML` de votre projet sur [LucidChart](lucidchart.com)
* Vous DEVEZ me notifier par un message privĂŠ original le COMMENCEMENT du projet ET
le PASSAGE Ă  chaque ĂŠtape.

> Bien ĂŠvidemment, vous pouvez ĂŠchanger entre vous, le peer-learning est la clĂŠ de
votre apprentissage MAIS la copie sera sanctionnĂŠ

N'hĂŠsitez pas en cas de de question Ă  les poser sur le channel `pragmatic` de slack,
il n'y a pas de question inutile.


## <a name='overview'>đđź Overview</a>
=================

Le peĚre NoeĚl a fait une demande officielle aĚ l'Efrei pour informatiser sa chaine d'emballage de cadeaux;
La monde tend vers une robotisation et le pĂ¨re NoĂŤl dit SK vous demande de concevoir un simulateur de chaine d'emballage.

SK vous fournit une liste deĚcrivant le meĚtier de l'elfe sur la chaine d'emballage de cadeaux.
Votre chef de projet a preĚfeĚreĚ prendre les choses en main et a traiteĚ pour vous l'analyse fonctionnelle et certains aspects de conception.

Il vous fournit une liste d'indications et de contraintes pour l'impleĚmentation des diffeĚrentes parties du simulateur.

## Etape \#1. Poney et figurines Dragon Ball

Le chef de projet vous demande d'eĚcrire les classes Toy, Pony, Figurine et DragonBall.

Il vous indique:
- Un `Pony` est un `Toy`
- Une `Figurine` est un `Toy`
- Un `DragonBall` est une `Figurine`

> đĄ Tips: qu'est ce que reprĂŠsente la "classe" `Toy` ?

Un jouet peut ĂŞtre dĂŠplacĂŠ via la mĂŠthode `isMoved`. De plus un jouet possĂ¨de un
attribut `type` de type `String` accessible via un **getter**

### Hi, poney

Un `Pony` possĂ¨de un attribut **statique** privĂŠ  `_nb` qui determine le nombre d'objet instanciĂŠ.
Il est par dĂŠfaut initialisĂŠ Ă  **1**.

Cette classe possĂ¨de ĂŠgalement un attribut `id` qui est ĂŠgale au numĂŠro de l'objet.
Lorsqu'un `Pony` est instanciĂŠ il affiche sur la sortie standard:

```sh
Pony #X is singing -->
Dou-double poney, jâfais izi money
DâoĂš tu mâconnais ? Parle moi en billets violets
Dou-double poney, jâfais izi money

```

> RemplacĂŠ X par l'identifiant

L'attribut type retourne la chaine de caractĂ¨re `Pony #X`

Quand un `Pony` est bougĂŠ il affiche `Huuuuuuhu!`


### Dragon Ball

Une figurine `DragonBall` possĂ¨de un attribut privĂŠ `_character` de type Enum `DBHeroes`
dĂŠfinit comme suit:

```swift
enum DBHeroes {
  case SANGOKU
  case BEJITA
  case BEERUS
  case KAMESENNIN
}
```

Pour instancier une figurine `DragonBall`, il faut spĂŠcifier le personnage via l'enum et ainsi
s'affiche sur la sortie standard:

```sh
X is singing -->
CHA-LA HEAD CHA-LA
Nani ga okite mo kibun wa heno-heno kappa
CHA-LA HEAD CHA-LA
Mune ga pachi-pachi suru hodo
Sawagu Genki-Dama --Sparking !

```

> RemplacĂŠ X par le personnage

L'attribut type de la classe retourne la chaine de caractĂ¨re `Dragon Ball figurine X`

Quand un `DragonBall` est bougĂŠ il affiche `KamĂŠ HamĂŠ Ha!`

### TEST

Voici les fichiers que vous devriez avoir:

```sh
~/M/cdiwm-rush-efrei-klaus âŻâŻâŻ tree .
.
âââ class.DragonBall.swift
âââ class.Pony.swift
âââ main.swift
âââ protocol.Figurine.swift
âââ protocol.Toy.swift

0 directories, 5 files
```

Voici un main suivi de la sortie que vous devriez avoir:

```swift
// Step #1
print("--- STEP #1 ---")

var pony: Pony = Pony()
var goku: DragonBall = DragonBall(DBHeroes.SANGOKU)

pony.isMoved()
goku.isMoved()
```

```sh
~/Efreitech/pp âŻâŻâŻ swiftc *.swift -o bin
~/Efreitech/pp âŻâŻâŻ ./bin
Pony #1 is singing -->
Dou-double poney, jâfais izi money
DâoĂš tu mâconnais ? Parle moi en billets violets
Dou-double poney, jâfais izi money

SANGOKU is singing -->
CHA-LA HEAD CHA-LA
Nani ga okite mo kibun wa heno-heno kappa
CHA-LA HEAD CHA-LA
Mune ga pachi-pachi suru hodo
Sawagu Genki-Dama --Sparking !

Huuuuuuhu!
KamĂŠ HamĂŠ Ha!
````

## Etape \#2. Une histoire d'emballage

Il faut maintenant eĚtre capable de geĚrer l'emballage des cadeaux:

#### PrĂŠparation

* Une `Box` est un `Packaging`
* Un `GiftWrap` est aussi un `Packaging`

> đĄ Tips: qu'est ce que reprĂŠsente la "classe" `Packaging` ?

Un `Packaging` possĂ¨de 2 attributs:
* `isOpen` un boolĂŠen qui permet de savoir s'il est ouvert ou fermĂŠ
* `toy` un jouet qui correspond Ă  celui qui est emballĂŠ

Par dĂŠfaut un emballage est fermĂŠ et il n'y a pas de jouet emballĂŠ

> đĄ Tips: Valeur par dĂŠfaut d'un jouet -- https://goo.gl/JF8SAv

Un `Packaging` possĂ¨de 2 mĂŠthodes:
* `open` qui permet d'ouvrir un emballage
* `insert` qui prend un jouet en paramĂŞtre et permet de l'emballer

Lorsqu'un objet est emballĂŠ, l'emballage devient fermĂŠ.

> đĄ Tips: Lorsqu'une mĂŠthode modifie un attribut elle n'est plus immutable, ie
qui ne change pas le comportement de l'objet (choix par dĂŠfaut).
Comment faire pour que les mĂŠthodes ci-dessus soit mutable?

### Factorisation

Les protocoles c'est bien mais l'implĂŠmentation des classes `Box` et `GiftWrap`
n'est-elle pas un duplicat?
Oui car la logique est la mĂŞme pour ces 2 classes et ce n'est pas une bonne pratique.

Heureusement, il existe un moyen d'implĂŠmenter une seule fois une mĂŞme logique d'un protocol.
Il s'agit des `extension` --> swift skill++ yeaaaaah :)

#### Les elfes entrent dans le Game

Un `Elf` est une classe qui possĂ¨de un attribut `nickname` de type `String` avec
**getter**+**setter**

Lorsque l'on crĂŠe un Elf, on doit spĂŠcifiĂŠ son `nickname`

### Pack

Un elf peut emballer un cadeau [et un seul] via une mĂŠthode `pack` qui prend en
paramĂŞtre un `Packaging` et un `Toy`

Si l'emballage est fermĂŠ, l'elf dit: `Sorry this package is not open`
Si l'emballage possĂ¨de dĂŠjĂ  un cadeau, l'elf dit: `Sorry this package already filled`

Sinon, le cadeau est ajoutĂŠ Ă  l'emballage et l'elf dit:
`Yeaaaah! Just packing the toy ~~ X ~~`

> RemplacĂŠ X par le type du jouet

Attention, un papier cadeau n'a pas besoin d'eĚtre ouvert pour emballer.

> đĄ Tips: Cette mĂŠthode modifie le comportement d'un objet passĂŠ en paramĂŞtre (packaging).
Comment faire pour que le changement effectuĂŠ au sein de la mĂŠthode soit "rĂŠellement" effectif ?

#### Unpack

Un elf peut dĂŠballer un cadeau via une mĂŠthode `unpack` qui prend en paramĂŞtre un
`Packaging`

Si l'emballage est ouvert ou qu'il n'y a pas de cadeau, l'elf dit:
`Sorry this package is already empty`

Sinon, le cadeau est enlevĂŠ de l'emballage et l'elf dit:
`Ooooooh! Just unpacking the toy ~~ X ~~`

Le jouet Ă  l'intĂŠrieur de l'emballage est retournĂŠ

> RemplacĂŠ X par le type du jouet

### TEST

Voici les fichiers que vous devriez avoir:

```sh
~/M/cdiwm-rush-efrei-klaus âŻâŻâŻ tree .
.
âââ class.Box.swift
âââ class.DragonBall.swift
âââ class.Elf.swift
âââ class.GiftWrap.swift
âââ class.Pony.swift
âââ extension.Packaging.swift
âââ main.swift
âââ protocol.Figurine.swift
âââ protocol.Packaging.swift
âââ protocol.Toy.swift

0 directories, 10 files
```

Voici un main suivi de la sortie que vous devriez avoir:

```swift
...

// Step #2
print("--- STEP #2 ---")

var majdi: Elf = Elf(nickname: "makiboto")
var box: Packaging = Box()
majdi.pack(packaging: &box, toy: goku)
box.open()
majdi.pack(packaging: &box, toy: goku)

var paper: Packaging = GiftWrap()
majdi.pack(packaging: &paper, toy: pony)
majdi.pack(packaging: &paper, toy: pony)

var toy: Toy! = majdi.unpack(packaging: &paper)
print(toy as! Pony === pony)
var r: Toy? = majdi.unpack(packaging: &paper)
print(r == nil)

```

```sh
Pony #1 is singing -->
Dou-double poney, jâfais izi money
DâoĂš tu mâconnais ? Parle moi en billets violets
Dou-double poney, jâfais izi money

SANGOKU is singing -->
CHA-LA HEAD CHA-LA
Nani ga okite mo kibun wa heno-heno kappa
CHA-LA HEAD CHA-LA
Mune ga pachi-pachi suru hodo
Sawagu Genki-Dama --Sparking !

Huuuuuuhu!
KamĂŠ HamĂŠ Ha!
Sorry this package is not open
Yeaaaah! Just packing the toy ~~ Dragon Ball figurine SANGOKU ~~
Yeaaaah! Just packing the toy ~~ Pony #1 ~~
Sorry this package already filled
Ooooooh! Just unpacking the toy ~~ Pony #1 ~~
true
Sorry this package is already empty
true
```

## Etape \#3. Tapis qui roule et Fabrique

### Mise en place

Il faut maintenant eĚtre capable de geĚrer le poste de travail :

Avant toute chose, il faut savoir que tout est `Object`, ie les jouets et les emballages.

L'elfe a une `Table` devant lui et un `ConveyorBelt` (tapis roulant) aĚ coĚteĚ de lui.
C'est deux entitĂŠs sont des meubles aka `Furniture`.

L'elfe peut poser et prendre sur un meuble des objets via les mĂŠthodes `put` et `take`.

On ne peut rien poser sur le tapis roulant s'il y a deĚjaĚ quelque chose, un attribut `isBusy`
nous permet de le connaĂŽtre l'ĂŠtat de ce tapis. Par dĂŠfaut, un tapis est disponible.

Quand il n'y a plus de place sur la table, elle craque et dit car elle ne peut contenir
qu'un maximum de 10 objets.
Pour cela crĂŠer un attribut `content` qui est un tableau d'`Object`.

SpĂŠcificitĂŠ de la `Table`, la mĂŠthode `take` prend un objet Ă  la fin du tableau et
il y a une mĂŠthode `take` supplĂŠmentaire qui prend en paramĂŞtre la position de l'objet.

L'elfe recĚ§oit des Obbjets en appuyant sur le bouton `in` du
tapis roulant ou envoie ce qu'il y a actuellement sur le tapis au peĚre NoeĚl en appuyant sur le bouton `out`

Un Obbjets envoyeĚ au peĚre NoeĚl est consideĚreĚ comme perdu, le tapis roulant est de nouveau libre.

L'elfe peut regarder via la mĂŠthode `look` sur la table pour savoir ce qu'il s'y trouve;
Il obtient un tableau avec les intituleĚs des diffeĚrents Objets.

```sh
[ "Toy", "Toy", "Packaging", "Toy" ]
```

L'elfe peut ĂŠgalement regarder sur le tapis roulant pour savoir ce qu'il s'y trouve.

### TEST

Voici les fichiers que vous devriez avoir:

```sh
~/M/cdiwm-rush-efrei-klaus âŻâŻâŻ tree .
.
âââ class.Box.swift
âââ class.ConveyorBelt.swift
âââ class.DragonBall.swift
âââ class.Elf.swift
âââ class.GiftWrap.swift
âââ class.Object.swift
âââ class.Pony.swift
âââ class.Table.swift
âââ extension.Packaging.swift
âââ main.swift
âââ protocol.Figurine.swift
âââ protocol.Furniture.swift
âââ protocol.Packaging.swift
âââ protocol.Toy.swift

0 directories, 14 files
```

Voici un main suivi de la sortie que vous devriez avoir:

```swift
...
// Step #3
print("--- STEP #3 ---")

var table: Table = Table()
var conveyor: ConveyorBelt = ConveyorBelt()

majdi.put(furniture: table, obj: paper)
majdi.put(furniture: table, obj: pony)
majdi.put(furniture: table, obj: box)
```

### Patterns

SK vous demande d'eĚcrire les protocoles `PTable` et `PTapisRoulant` ainsi que les classes
`TableFactory` et `ConveyorBeltFactory` impleĚmentant ces protocoles.

La table et le tapis roulant du peĚre NoeĚl contiennent ce qu'il faut pour faire 2 cadeaux.

La disposition/reĚpartition des emballages/jouets entre le tapis et la table est aĚ votre convenance.
SK veut que vous lui fournissiez deux mĂŠthodes:

```swift
makeTable() -> PTable
makeConveyorBelt() -> PConveyorBelt
```

Ces 2 mĂŠthodes permettent de reĚifier (instancier) ces 2 objets.

### TEST

Voici les fichiers que vous devriez avoir:

```sh
~/M/cdiwm-rush-efrei-klaus âŻâŻâŻ tree .
.
âââ class.Box.swift
âââ class.ConveyorBelt.swift
âââ class.DragonBall.swift
âââ class.Elf.swift
âââ class.GiftWrap.swift
âââ class.Object.swift
âââ class.Pony.swift
âââ class.Table.swift
âââ extension.Packaging.swift
âââ main.swift
âââ protocol.Figurine.swift
âââ protocol.Furniture.swift
âââ protocol.PConveyorBelt.swift
âââ protocol.PTable.swift
âââ protocol.Packaging.swift
âââ protocol.Toy.swift

0 directories, 16 files
```

## Etape \#5. Chaussettes

### Le final

Vous DEVEZ imaginer et implĂŠmenter un moyen de faire communiquer la table et le tapis roulant avec ceux de l'un de vos camarade đą<br />
Pour cela vous devez utiliser des chaussettes magiques.

> Le travail doit ĂŞtre fait en binĂ´me, choose well

## Etape \#6. Bonus

### Le typage say bien

Tout simplement refaire le projet en TypeScript ou un autre si dĂŠjaĂ  fait ;p

## <a name='credits'>Credits</a>

Craft with :heart: by [**Majdi Toumi**](http://majdi.im) in **Paris**.
