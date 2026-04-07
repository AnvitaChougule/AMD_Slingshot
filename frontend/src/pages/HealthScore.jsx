import { useState } from "react";

function HealthScore() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(null);

  const [formData, setFormData] = useState({
    mealsPerDay: "",
    breakfast: "",
    fastFood: "",
    waterIntake: "",
    fruitIntake: "",
    vegetableIntake: "",
    exercise: "",
    sleepHours: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const calculateScore = () => {
    let score = 0;
    let suggestions = [];
    let improvements = [];
    let goodHabits = [];

    if (formData.mealsPerDay >= 3) {
      score += 10;
      goodHabits.push("You eat regular meals.");
    } else {
      suggestions.push("Try eating at least 3 balanced meals daily.");
      improvements.push("Increase meal frequency.");
    }

    if (formData.breakfast === "yes") {
      score += 10;
      goodHabits.push("You eat breakfast regularly.");
    } else {
      suggestions.push("Add a protein-rich breakfast.");
      improvements.push("Improve breakfast habit.");
    }

    if (formData.fastFood === "rarely") {
      score += 15;
      goodHabits.push("Low fast food consumption.");
    } else {
      suggestions.push("Reduce processed/fast food intake.");
      improvements.push("Cut down fast food.");
    }

    if (formData.waterIntake >= 2) {
      score += 15;
      goodHabits.push("Good hydration level.");
    } else {
      suggestions.push("Increase daily water intake (2L+).");
      improvements.push("Drink more water.");
    }

    if (formData.fruitIntake === "daily") {
      score += 10;
      goodHabits.push("Regular fruit intake.");
    } else {
      suggestions.push("Add fruits to your daily diet.");
      improvements.push("Increase fruit intake.");
    }

    if (formData.vegetableIntake === "daily") {
      score += 10;
      goodHabits.push("Good vegetable consumption.");
    } else {
      suggestions.push("Include vegetables daily.");
      improvements.push("Increase vegetable intake.");
    }

    if (formData.exercise === "regular") {
      score += 15;
      goodHabits.push("Active lifestyle maintained.");
    } else {
      suggestions.push("Exercise at least 3 times a week.");
      improvements.push("Increase physical activity.");
    }

    if (formData.sleepHours >= 7) {
      score += 15;
      goodHabits.push("Healthy sleep cycle.");
    } else {
      suggestions.push("Sleep at least 7–8 hours.");
      improvements.push("Improve sleep routine.");
    }

    return { score, suggestions, improvements, goodHabits };
  };

  const handleSubmit = () => {
    const res = calculateScore();
    setResult(res);
  };

  if (result) {
    return (
      <div style={styles.container}>
        <h1>Your Health Score</h1>
        <div style={styles.score}>{result.score}/100</div>

        <div style={styles.section}>
          <h3>✅ Good Habits</h3>
          <ul>
            {result.goodHabits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={styles.section}>
          <h3>⚠ Areas to Improve</h3>
          <ul>
            {result.improvements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={styles.section}>
          <h3>💡 Suggestions</h3>
          <ul>
            {result.suggestions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Health Assessment</h1>

      {step === 1 && (
        <>
          <input
            name="mealsPerDay"
            placeholder="Meals per day"
            onChange={handleChange}
            style={styles.input}
          />
          <button onClick={next} style={styles.button}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <select name="breakfast" onChange={handleChange} style={styles.input}>
            <option value="">Eat breakfast regularly?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div>
            <button onClick={back} style={styles.button}>Back</button>
            <button onClick={next} style={styles.button}>Next</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <select name="fastFood" onChange={handleChange} style={styles.input}>
            <option value="">Fast food frequency?</option>
            <option value="often">Often</option>
            <option value="rarely">Rarely</option>
          </select>
          <div>
            <button onClick={back} style={styles.button}>Back</button>
            <button onClick={next} style={styles.button}>Next</button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <input
            name="waterIntake"
            placeholder="Water intake (liters)"
            onChange={handleChange}
            style={styles.input}
          />
          <div>
            <button onClick={back} style={styles.button}>Back</button>
            <button onClick={next} style={styles.button}>Next</button>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <select name="fruitIntake" onChange={handleChange} style={styles.input}>
            <option value="">Fruit intake?</option>
            <option value="daily">Daily</option>
            <option value="rarely">Rarely</option>
          </select>
          <div>
            <button onClick={back} style={styles.button}>Back</button>
            <button onClick={next} style={styles.button}>Next</button>
          </div>
        </>
      )}

      {step === 6 && (
        <>
          <select name="vegetableIntake" onChange={handleChange} style={styles.input}>
            <option value="">Vegetable intake?</option>
            <option value="daily">Daily</option>
            <option value="rarely">Rarely</option>
          </select>
          <div>
            <button onClick={back} style={styles.button}>Back</button>
            <button onClick={next} style={styles.button}>Next</button>
          </div>
        </>
      )}

      {step === 7 && (
        <>
          <select name="exercise" onChange={handleChange} style={styles.input}>
            <option value="">Exercise frequency?</option>
            <option value="regular">Regular</option>
            <option value="rare">Rare</option>
          </select>
          <div>
            <button onClick={back} style={styles.button}>Back</button>
            <button onClick={next} style={styles.button}>Next</button>
          </div>
        </>
      )}

      {step === 8 && (
        <>
          <input
            name="sleepHours"
            placeholder="Sleep hours"
            onChange={handleChange}
            style={styles.input}
          />
          <div>
            <button onClick={back} style={styles.button}>Back</button>
            <button onClick={handleSubmit} style={styles.button}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    textAlign: "center"
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#2e7d32",
    color: "white",
    cursor: "pointer"
  },
  score: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#2e7d32"
  },
  section: {
    maxWidth: "500px"
  }
};

export default HealthScore;