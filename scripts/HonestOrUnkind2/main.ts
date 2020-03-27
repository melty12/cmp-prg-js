const main = (input: string) => {
  const lines = input.trim().split("\n")
  const testimonyList = new Map()
  const A = lines.slice(1)
  const X = A.filter(a => a.length !== 1).map(a => {
    return a.split(" ").map(str => parseInt(str))
  })

  X.forEach(x => {
    let testimony = x[1]
    if(testimonyList.get(x[0])) {
      testimony = testimonyList.get(x[0]) + x[1]
    }
    testimonyList.set(x[0], testimony)
  })

  console.log(testimonyList)

}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
