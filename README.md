# Lakshay Handa

```rust
// build.rs

fn main() {
    println!("cargo:rerun-if-changed=assumptions");
}
````

## About

Started in **Commerce**, where inputs, incentives, and outcomes must reconcile.
Moved into **AI**, where the same discipline is often optional.

I care about **systems that compile cleanly and fail loudly**.
Less magic. More intent.

Currently focused on **LLMs, NLP systems, Rust fundamentals**, and how ideas behave when they are **built, shipped, and maintained**.

---

## Build Configuration

```rust
pub struct Build {
    pub stages: Vec<&'static str>,
}

impl Build {
    pub fn new() -> Self {
        Self {
            stages: vec![
                "ingest signals",
                "validate assumptions",
                "model and reason",
                "evaluate behavior",
                "deploy with constraints",
                "observe and iterate",
            ],
        }
    }
}
```

---

## Stack

### Languages

```txt
languages/
├── Python        # experimentation and glue
├── Rust          # correctness-first
├── SQL           # durable truth
└── Bash          # necessary friction
```

### Data

```txt
data/
└── MongoDB       # flexible inputs, explicit boundaries
```

### AI / ML

```txt
ml/
├── TensorFlow
├── Hugging Face
├── Scikit-learn
└── LangChain / LangGraph
```

### Systems

```txt
systems/
├── Docker
├── Git
├── CI/CD
└── Cloud (GCP)
```

---

## Design Constraints

```txt
• correctness before cleverness
• evaluation over intuition
• cost-aware systems
• abstractions that explain themselves
```

---

## Local Conventions

```bash
# ~/.bashrc

alias build="cargo check && reflect"
alias lint="cargo clippy"
alias ship="git commit -m 'intentional change' && git push"
alias notes="echo 'simplicity is a feature'"
```

```txt
Known breaking changes:
- assumptions
- over-engineered abstractions
- linear learning myths
```

---

## Contact

```json
{
  "location": "Delhi, India",
  "email": "connect.lakshay@outlook.com",
  "linkedin": "linkedin.com/in/lakshayhanda",
  "x": "x.com/lakshayknows",
  "status": "learning in public, building carefully"
}
```

```rust
// build finished
```
