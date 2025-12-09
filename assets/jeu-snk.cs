using UnityEngine;

public class GameManager : MonoBehaviour
{
    // La fonction 'Start' est appelée une seule fois au début du jeu.
    void Start()
    {
        // Ceci est une instruction en C# qui affiche un message dans la fenêtre Console d'Unity.
        Debug.Log("Le GameManager a démarré !");
    }

    // La fonction 'Update' est appelée une fois par frame (image) pendant le jeu.
    void Update()
    {
        // Nous laissons 'Update' vide pour le moment,
        // mais c'est ici que l'on mettrait la logique de mouvement ou de vérification constante.
    }
}