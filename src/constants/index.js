export const OPERADORES_JAVA = [
  "+",
  "-",
  "/",
  "*",
  "int",
  "double",
  "float",
  ";",
  ":",
  "public",
  "static",
  "void",
  "&&",
  "||",
  "<=",
  ">=",
  "<",
  ">",
];

export const OPERADORES_JAVA_OCURRENCIAS = {
  "+":0,
  "-":0,
  "/":0,
  "*":0,
  "int":0,
  "double":0,
  "float":0,
  ";":0,
  ":":0,
  "public":0,
  "static":0,
  "void":0,
  "&&":0,
  "||":0,
  "<=":0,
  ">=":0,
  "<":0,
  ">":0,
};

export const CONDICIONALES_JAVA = {
  ">": 0,
  "<": 0,
  ">=": 0,
  "<=": 0,
  "==": 0,
  try: 0,
};

export const CODE_EXAMPLE = `public static void main(String[] args) {

  Java8Function3 obj = new Java8Function3();

  List<String> list = Arrays.asList("node", "c++", "java", "javascript");

  // lambda
  Map<String, Integer> map = obj.convertListToMap(list, x -> x.length());

  System.out.println(map);    // {node=4, c++=3, java=4, javascript=10}

  // method reference
  Map<String, Integer> map2 = obj.convertListToMap(list, obj::getLength);

  System.out.println(map2);
}`;
