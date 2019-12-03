const input = "6\nkhabarovsk 20\nmoscow 10\nkazan 50\nkazan 35\nmoscow 60\nkhabarovsk 40";

const main = (input: string) => {
    const lines = input.trim().split("\n").slice(1).map((line, i) => {
        const [S, P] = line.split(' ');
        return { name: S, score: P, id: i+1 };
    });
    lines.sort((a: any, b: any) => {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return b.score - a.score;
        }
    });
    const ans = lines.map(line => line.id).join('\n');
    console.log(ans);
}
main(input);