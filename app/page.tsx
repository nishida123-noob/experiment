import { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Textarea } from "@/components/ui/textarea";

export default function ThinkingConnectApp() { const [input, setInput] = useState({ thought: "", hypothesis: "", question: "", depth: "deep" });

const [history, setHistory] = useState([]);

const handleSubmit = () => { setHistory([...history, input]); setInput({ thought: "", hypothesis: "", question: "", depth: "deep" }); };

return ( <div className="p-6 grid gap-6 max-w-2xl mx-auto"> <h1 className="text-2xl font-bold">Thinking Connect</h1>

<Card>
    <CardContent className="p-4 grid gap-4">
      <Textarea
        placeholder="① 今考えてること"
        value={input.thought}
        onChange={(e) => setInput({ ...input, thought: e.target.value })}
      />

      <Textarea
        placeholder="② 仮説"
        value={input.hypothesis}
        onChange={(e) => setInput({ ...input, hypothesis: e.target.value })}
      />

      <Textarea
        placeholder="③ わからないこと"
        value={input.question}
        onChange={(e) => setInput({ ...input, question: e.target.value })}
      />

      <select
        className="border p-2 rounded"
        value={input.depth}
        onChange={(e) => setInput({ ...input, depth: e.target.value })}
      >
        <option value="light">軽く</option>
        <option value="deep">深く</option>
        <option value="core">本質</option>
      </select>

      <Button onClick={handleSubmit}>送信</Button>
    </CardContent>
  </Card>

  <div className="grid gap-3">
    {history.map((item, index) => (
      <Card key={index}>
        <CardContent className="p-3 text-sm">
          <p><strong>思考:</strong> {item.thought}</p>
          <p><strong>仮説:</strong> {item.hypothesis}</p>
          <p><strong>疑問:</strong> {item.question}</p>
          <p><strong>深さ:</strong> {item.depth}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

); }