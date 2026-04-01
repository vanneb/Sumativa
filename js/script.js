:root {
  --primary: #e8112d;
  --dark: #1f1f1f;
  --light: #f5f6fa;
}

body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: var(--light);
  color: var(--dark);
}

.header {
  background: linear-gradient(135deg, #e8112d, #ff4b5c);
  color: white;
  text-align: center;
  padding: 2rem;
}

.nav {
  background: #222;
  text-align: center;
  padding: 1rem;
}

.nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

.hero {
  text-align: center;
  padding: 3rem 1rem;
  background: white;
}

.container {
  max-width: 1100px;
  margin: 2rem auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  flex: 1 1 300px;
  text-align: center;
}

.price {
  color: var(--primary);
  font-weight: bold;
}

.carrito {
  max-width: 600px;
  margin: 2rem auto;
  background: white;
  padding: 1rem;
  text-align: center;
}

.footer {
  text-align: center;
  padding: 1rem;
  background: #222;
  color: white;
}
