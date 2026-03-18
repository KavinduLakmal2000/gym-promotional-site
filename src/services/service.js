export async function getPlans() {
  try {
    const res = await fetch(`./gym-promotional-site/plans.json`);
    if (!res.ok) throw new Error("Failed to load plans");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}