package test;

public class Class2 {
	
	String ville;
	String pays;
	int nbPoeple;
	
	public String getVille() {
		return ville;
	}
	
	public void setVille(String ville) {
		this.ville = ville;
	}

	public Class2() {
		ville = "une ville";
		pays = "un pays"; 
		nbPoeple = 12598;
		
		System.out.println(ville + " " + pays + " " + nbPoeple);
	}
	
	public Class2(String ville, String pays, int nbPoeple) {
		setVille(ville);
		this.pays = pays;
		this.nbPoeple = nbPoeple;
		
		System.out.println(ville + " " + pays + " " + nbPoeple);
	}

	public static void main(String[] args) {
		Class2 ville = new Class2();
		Class2 ville2 = new Class2("Compiègne", "France", 41000);
		System.out.println(ville.getVille());
		System.out.println(ville2.getVille());
	}
}
