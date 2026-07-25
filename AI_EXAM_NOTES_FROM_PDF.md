# SCSA1701 / SCSB1701 — AI Exam Notes (from Unit I, II, III PDFs only)

Answers below are taken from the uploaded PDFs: **Unit I**, **Unit II**, **Unit III**.

---

# 2 MARKS

## 1. Importance / Foundations of AI

AI is the branch of computer science concerned with making computers behave like humans. John McCarthy (1956) defines it as *“the science and engineering of making intelligent machines, especially intelligent computer programs.”*

**Foundations (disciplines that contributed to AI):**
- **Philosophy** — formal rules, mind/brain, knowledge → action
- **Mathematics** — algorithms, decidability, probability
- **Economics** — decisions to maximize payoff
- **Neuroscience** — how brains process information
- **Psychology** — how humans/animals think and act
- **Computer Engineering** — efficient computers (artifact for AI)
- **Control theory & Cybernetics** — artifacts under own control
- **Linguistics** — computational linguistics / NLP

---

## 2. Define AI — 4 Approaches

| Approach | Definition |
|---|---|
| **Think like humans** | “The exciting new effort to make computers think as if machines with minds, in the full and literal sense.” |
| **Think rationally** | “The study of mental faculties through the use of computer models.” |
| **Act like humans** | “The art of creating machines that perform functions that require intelligence when performed by people.” |
| **Act rationally** | “Computational intelligence is the study of the design of intelligent agents.” |

**(a) Acting humanly — Turing Test (1950):** computer passes if interrogator cannot tell person from machine. Needs: NLP, knowledge representation, automated reasoning, machine learning (+ vision & robotics for full test).

**(b) Thinking humanly — Cognitive Modeling:** introspection / psychological experiments (e.g. GPS by Newell & Simon).

**(c) Thinking rationally — Laws of Thought:** Aristotle; e.g. *“Socrates is a man; all men are mortal; therefore Socrates is mortal.”*

**(d) Acting rationally — Rational Agent:** do the right thing (maximize goal achievement given available information).

---

## 3. PEAS — Taxi (refer table)

**PEAS** = Performance, Environment, Actuators, Sensors.

**Performance measure for automated taxi (PDF):**
- Reaching the correct destination
- Minimizing fuel consumption and vehicle wear
- Reducing travel time and cost
- Following traffic rules
- Avoiding inconvenience to other road users
- Ensuring passenger safety and comfort
- Maximizing profit

**PEAS table (Automated Taxi) — from PDF figure:**

| Agent Type | Performance Measure | Environment | Actuators | Sensors |
|---|---|---|---|---|
| Taxi driver | Safe, fast, legal, comfortable trip; maximize profits | Roads, other traffic, pedestrians, customers | Steering, accelerator, brake, signal, horn, display | Cameras, sonar, speedometer, GPS, odometer, engine sensors, keyboards, accelerometer |

Some goals conflict (e.g. travel time vs safety) → trade-offs needed.

---

## 4. Heuristic Function

A **heuristic technique** helps solve problems even though there is no guarantee it will never lead in the wrong direction.

- Heuristic function **h(n)** = estimated cost of the cheapest path from node *n* to a goal.
- Most common way to give problem-specific knowledge to search.
- Example (Romania): straight-line distance to Bucharest.

**For 8-puzzle (admissible heuristics):**
- **h1** = number of tiles in wrong position
- **h2** = sum of Manhattan (city-block) distances of tiles from goal

Admissible ⇒ never overestimates.

---

## 5. Simulated Annealing

- Takes some **downhill** steps to escape local maxima; picks **random** moves (not always best).
- If move improves → keep it; else accept with probability **&lt; 1**.
- Near the end, behaves like hill-climbing.
- “Annealing” = cooling a liquid until it freezes.
- Inputs: **problem** + **schedule** (how fast temperature T is lowered).
- ΔE = value(next) − value(current); if ΔE &gt; 0 accept; else accept with probability **e^(ΔE/T)**.

**Applications:** TSP, VLSI design, production scheduling, timetable, image processing.

---

## 6. Local Beam Search

- Keeps track of **k states** (not just one).
- Starts with k randomly generated states.
- Each step: generate all successors of all k states; if any is goal → halt; else select **k best** successors and repeat.
- Unlike random-restart (independent runs), local beam **shares information** among the k threads.

**Stochastic beam search:** choose k successors at random with probability increasing with value (avoids crowding).

---

## 7. Backtracking (with example)

**Backtracking search** = DFS that chooses values for **one variable at a time** and backtracks when a variable has no legal values left.

**CSP incremental formulation:**
- Initial state: empty assignment `{}`
- Successor: assign a value to any unassigned variable if it does not conflict
- Goal test: assignment complete
- Path cost: constant per step

**Example — map colouring (Australia):** variables WA, NT, Q, NSW, V, SA, T; domain {red, green, blue}; neighbouring regions different colours.  
One solution: `{WA=red, NT=green, Q=red, NSW=green, V=red, SA=blue, T=red}`.

**Chronological backtracking:** on failure, back up to previous variable.  
**Intelligent backtracking / backjumping:** jump to a variable in the **conflict set**.

---

## 8. Quantifiers — “All men are mortal” (write predicate)

From Unit I (Laws of Thought):  
*“Socrates is a man; all men are mortal; therefore Socrates is mortal.”*

From Unit III (FOL quantifiers):

**Universal (∀)** — “For All”; **Existential (Ǝ)** — “There Exists”.

Similar style to PDF example `∀x King(x) ⇒ Person(x)`:

```
∀x Man(x) ⇒ Mortal(x)     // All men are mortal
Man(Socrates)              // Socrates is a man
∴ Mortal(Socrates)         // Therefore Socrates is mortal
```

Other PDF-style examples:
- `∀x King(x) ⇒ Person(x)` — All kings are persons
- `∀x Likes(x, IceCream)` — Everyone likes ice cream

---

## 9. Rationality

**Rationality** = status of being reasonable, sensible, having good judgment. Concerned with expected actions and results depending on what the agent has perceived. Gathering useful information is part of rationality.

**Ideal rational agent:** maximizes performance measure based on:
1. Its percept sequence
2. Its built-in knowledge base

**What is rational depends on four things:**
1. Performance measure (success criterion)
2. Agent’s prior knowledge of the environment
3. Actions the agent can perform
4. Agent’s percept sequence to date

**Definition:** For each possible percept sequence, a rational agent should select an action expected to maximize its performance measure, given the evidence from the percept sequence and whatever built-in knowledge it has.

**Note:** Omniscience (knowing actual outcomes) is impossible; a rational agent gathers information and learns.

---

# 8 MARKS

## 1. 8-Puzzle (Toy problem + states / heuristics)

**Definition (Unit I):** 3×3 board with eight numbered tiles + blank. Slide a tile into the blank. Goal = goal configuration.

**Problem formulation:**
| Component | Description |
|---|---|
| **States** | Location of each of 8 tiles + blank (9 squares) |
| **Initial state** | Any state (goal reachable from half of initial states) |
| **Successor** | Blank moves Left / Right / Up / Down |
| **Goal test** | Matches goal configuration |
| **Path cost** | Each step = 1 |

**State space facts:**
- Family of sliding-block puzzles; NP-complete class
- **8-puzzle:** 9!/2 = **181,440** reachable states
- Exhaustive search ~ depth 20, branching ~3 → about **3.5 × 10⁹** states; with repeated-state check → **9! = 362,880** arrangements

**Heuristics (Unit II):**
- **h1** = misplaced tiles (admissible)
- **h2** = Manhattan distance sum (admissible; better than h1)
- Need heuristic that **never overestimates** for shortest solutions

---

## 2. 8-Queens Problem

**Goal:** Place 8 queens on a chessboard so that **no queen attacks** another (same row, column, or diagonal).

**Two formulations:**
1. **Incremental** — start empty; each action adds a queen
2. **Complete-state** — all 8 queens on board; move them around  
Path cost irrelevant — only final configuration matters (local search).

**Naive incremental formulation:**
- States: any arrangement of 0–8 queens
- Initial: no queens
- Successor: add queen to any empty square
- Goal: 8 queens, none attacked  
→ **64 × 63 × … × 57 ≈ 3 × 10¹⁴** sequences

**Better formulation:**
- States: n queens (0 ≤ n ≤ 8), one per column in leftmost columns, none attacking
- Successor: add queen in leftmost empty column in a non-attacked square  
→ state space reduced to **2057**; solutions easy to find

(For 100-queens: naive ~10⁴⁰⁰ vs improved ~10⁵² — still huge.)

**Local search / GA fitness (Unit II):** number of **non-attacking pairs** (solution = **28**).

---

# 16 MARKS

## UNIT I

### A. Types of Agents (IMPORTANT)

Intelligent Agent = **Agent Program + Architecture**

**Four basic types (+ learning):**

**1. Simple Reflex Agents**
- Act only on **current percept** (ignore history)
- Condition–action rules: `if condition then action`
- Works only if environment is **fully observable**
- Example: medical diagnosis — “If reddish brown spots → treat for measles”

**2. Model-based Reflex Agents**
- Handle **partial observability** by keeping internal state of unseen world
- Combine current percept + old internal state → updated state
- Needs knowledge of: (i) how world evolves, (ii) how own actions affect world → **model of the world**

**3. Goal-based Agents**
- Need description of current state **and** goal (desirable situations)
- More flexible — knowledge explicit and modifiable
- Can change behaviour to go to a different location

**4. Utility-based Agents**
- Prefer high-quality behaviour when multiple paths to goal exist (safer, quicker, cheaper)
- **Utility function** maps state → real number (“degree of happiness”)
- Handles conflicting goals (speed vs safety) and uncertain goals

**5. Learning Agents** (also in PDF)
- Components: Learning element, Performance element, Critic, Problem generator
- Operate in initially unknown environments and improve

---

### B. Toy Problems vs Real-World Problems (IMPORTANT — Real World)

**Toy problem:** illustrates problem-solving methods; used to compare algorithms.  
**Real-world problem:** solutions people actually care about.

**TOY PROBLEMS:**
1. **Vacuum World** — 2 locations × dirt → **8 states**; actions Left/Right/Suck; goal = all clean
2. **8-Puzzle** — sliding tiles (see 8 marks)
3. **8-Queens** — place queens without attack (see 8 marks)

**REAL-WORLD PROBLEMS (IMPORTANT):**
1. **Route-finding** — locations + links; used in computer networks, military planning, airline systems
2. **Airline travel** — state = location + time; successor = scheduled flights; cost = money, waiting, seat quality, etc.
3. **Touring problems** — visit every city at least once (state includes visited set)
4. **TSP** — visit each city **exactly once**; shortest tour; **NP-hard**; used for circuit-board drills, stocking machines
5. **VLSI layout** — position millions of components; cell layout + channel routing
6. **Robot navigation** — continuous space; multi-dimensional if arms/legs/wheels
7. **Automatic assembly sequencing** — order of assembly; protein design
8. **Internet searching** — graph of pages connected by links

---

### C. Vacuum Cleaner World (Case Study)

**PEAS:**
| Component | Details |
|---|---|
| **Performance** | Clean all rooms; minimize time/energy; avoid unnecessary moves |
| **Environment** | Two rooms A, B; each Clean or Dirty |
| **Actuators** | Move Left, Move Right, Suck, NoOp |
| **Sensors** | Current location (A/B); status Clean/Dirty |

**States:** `(Location, Status A, Status B)` → **8 states** (2 locations × 4 dirt combos).

**Simple reflex policy:**
```
IF current room Dirty → Suck
ELSE IF location = A → Move Right
ELSE IF location = B → Move Left
```

**Working example:**  
`(A, Dirty, Dirty)` → Suck → `(A, Clean, Dirty)` → Right → `(B, Clean, Dirty)` → Suck → `(B, Clean, Clean)` **Goal**.

---

## UNIT II

### A. Informed Search (2 main strategies)

**Informed / heuristic search:** uses problem-specific knowledge beyond the problem definition; evaluation function f(n); can be more efficient than uninformed.

**1. Greedy Best-First Search**
- Expand node that appears closest to goal
- Uses **h(n)** only
- Romania example: straight-line distance
- Like DFS: incomplete, not optimal; worst case O(b^m)

**2. A* Search**
- **f(n) = g(n) + h(n)**
  - g(n) = path cost from start to n
  - h(n) = estimated cost from n to goal
- Optimal and complete if **h** is **admissible** (never overestimates)
- Example admissible h: straight-line distance h_SLD
- Expands nodes with f(n) &lt; C*; optimally efficient for given heuristic
- Weakness: memory — keeps all generated nodes; often runs out of space

**Memory-bounded variants:** IDA*, RBFS, MA*, SMA*

---

### B. Uninformed Search — Summary Table (IMPORTANT) — 5 strategies

Uninformed = no extra info beyond problem definition.

| Criterion | BFS | DFS | Depth-limited | Iterative deepening | Bidirectional |
|---|---|---|---|---|---|
| **Complete?** | YES* | NO | YES if *l ≥ d* | YES | YES* |
| **Time** | b^(d+1) | b^m | b^l | b^d | b^(d/2) |
| **Space** | b^(d+1) | b^m | b^l | b^d | b^(d/2) |
| **Optimal?** | YES* | NO | NO | YES | YES |

(*under suitable conditions as in PDF table)

**Five uninformed strategies:**
1. **BFS** — queue; shortest path; complete; heavy memory O(b^d)
2. **Uniform-cost** — expand lowest g(n); Dijkstra; O(b^(C/m))
3. **DFS** — stack/recursion; linear space; may go forever; not complete/optimal
4. **Depth-limited** — DFS with depth limit *l*; O(b^l) time/space
5. **Iterative deepening** — DLS with l = 0,1,2,…; combines BFS optimality with DFS space

(+ Bidirectional in summary table: search both ends; O(b^(d/2)))

---

### C. Genetic Algorithm

- Variant of **stochastic beam search**
- Successors by **combining two parents** (not modifying one state)
- Starts with population of **k** random individuals (often bit strings)
- 8-queens encoding: 8 × log₂8 = **24 bits**

**Steps:**
1. **Fitness function** — higher for better states; 8-queens: non-attacking pairs (solution = 28)
2. **Selection** — pick pairs for reproduction by fitness probability
3. **Crossover** — random crossover point; child gets genes from both parents
4. **Mutation** — small probability flip; in 8-queens = move a random queen in its column

**Advantage:** crossover combines useful blocks evolved independently → coarser search granularity.

---

## UNIT III

### A. Constraint Satisfaction Problems (CSP) — Cryptoarithmetic (no map)

**CSP definition:**
- Variables X₁…Xₙ with domains Dᵢ
- Constraints C₁…Cₘ
- Consistent assignment = no constraint violated
- Solution = complete assignment satisfying all constraints

**Cryptoarithmetic example (PDF Example 3):**

```
  S E N D
+ M O R E
---------
M O N E Y
```

Replace each letter by a **distinct digit** so the sum is correct.

**Other CSP examples in PDF:** n-Queens, crossword, map colouring.

**Backtracking for CSPs:** DFS assigning one variable at a time.  
**Forward checking:** when X assigned, delete inconsistent values from neighbours’ domains.  
**Arc consistency (AC-3):** stronger propagation.  
**Min-conflicts local search:** change one variable to minimize conflicts (very effective on n-queens).

---

### B. Minimax Algorithm

For two-player games (MAX vs MIN). Game defined by: initial state, successor function, terminal test, utility function.

**Idea:** MAX maximizes utility; MIN minimizes. Back up values from leaves.

**Example (2-ply tree):** leaves under B = 3,12,8 → min = **3**; C → **2**; D → **2**; root max(3,2,2) = **3** → choose move to B.

**Complexity:** time **O(b^m)**; space **O(bm)** (m = max depth, b = branching).

---

### C. Alpha–Beta Pruning

**Pruning** = eliminate a branch without examining it.

- **α** = best (highest) value for MAX so far (lower bound)
- **β** = best (lowest) value for MIN so far (upper bound)

Alpha–beta returns the **same move** as minimax but prunes branches that cannot affect the decision.

**Example from PDF:** after B = 3, first leaf of C = 2 → C ≤ 2 &lt; 3 → **prune rest of C**.

If successors ordered well → examine only **O(b^(d/2))** nodes (effective branching √b; chess ~6 instead of ~35).

---

### D. Forward and Backward Chaining

**Forward chaining**
- Data → goal (repeated modus ponens)
- Find rule whose **IF** is known true → add **THEN** to facts; repeat until goal
- Example (Fritz): croaks + eats flies → frog → green
- Also: “West is a criminal” Datalog example
- Used in expert systems / production rules (e.g. CLIPS style)

**Backward chaining**
- Goal → data
- Find rule whose **THEN** matches goal; make **IF** the new subgoal(s)
- Same Fritz rules: prove “Fritz green” → need frog → need croaks & eats flies → given facts
- Used in theorem provers / Prolog-style; good for interrogative queries

| | Forward | Backward |
|---|---|---|
| Direction | Facts → conclusions | Goal → supporting facts |
| Style | Generate all inferences | Search path to goal |

---

### E. Wumpus World Problem

Cave of rooms; wumpus eats agent; pits; gold; one arrow.

**PEAS:**
| | |
|---|---|
| **Performance** | +1000 gold; −1000 pit/wumpus death; −1 per action; −10 using arrow |
| **Environment** | 4×4 grid; start [1,1] facing right; gold & wumpus random; pits p=0.2 |
| **Actuators** | Forward, TurnLeft, TurnRight, Grab, Shoot |
| **Sensors** | Stench, Breeze, Glitter, Bump, Scream |

**Sample reasoning:**
1. [1,1] percept all None → [1,2] and [2,1] OK
2. Move to [2,1], feel **Breeze** → pit in [2,2] or [3,1]
3. Go to [1,2], feel **Stench** → wumpus in [1,3] (not [1,1], not [2,2])
4. No breeze in [1,2] → no pit in [2,2] → pit must be [3,1]
5. [2,2] OK → move toward glitter → **Grab** gold

Logical agent combines percepts over time; conclusions guaranteed correct if information is correct.

---

# Quick Revision Checklist

| Marks | Topic | Unit |
|---|---|---|
| 2 | AI importance / 4 approaches | I |
| 2 | PEAS taxi table | I |
| 2 | Rationality | I |
| 2 | Heuristic / SA / Local beam / Backtracking / Quantifiers | II–III |
| 8 | 8-puzzle (states + heuristics) | I–II |
| 8 | 8-queens | I–II |
| 16 | Types of agents; Toy vs Real-world; Vacuum | I |
| 16 | Informed (2); Uninformed table (5); GA | II |
| 16 | CSP crypto; Minimax; α-β; Chaining; Wumpus | III |

*Source PDFs: SCSB1701 AI Unit I, SCSA1701 AI Unit II, SCSB1701 AI Unit III.*
