using System.Threading;





class FileOrganizer
{

    static Dictionary<string, string> folderType = new Dictionary<string, string>()
    {
        { ".jpg", "Images" },
        { ".png", "Images" },
        { ".gif", "Images" },
        { ".webp", "Images" },
        { ".jfif", "Images" },
        { ".jpeg", "Images" },

        { ".mp3", "Music" },
        { ".wav", "Music" },
        { ".ogg", "Music" },
        { ".wma", "Music" },
        { ".3gp", "Music" },

        { ".mp4", "Videos" },
        { ".mov", "Videos" },
        { ".avi", "Videos" },
        { ".mkv", "Videos" },

        { ".pdf", "Documents" },
        { ".doc", "Documents" },
        { ".docx", "Documents" },
        { ".xls", "Documents" },
        { ".xlsx", "Documents" },
        { ".ppt", "Documents" },
        { ".pptx", "Documents" },
        { ".txt", "Documents" },
        { ".rtf", "Documents" },
        { ".odt", "Documents" },
        { ".csv", "Documents" },
        { ".log", "Documents" },
        { ".json", "Documents" },
        { ".xml", "Documents" },
        { ".yml", "Documents" },
        { ".yaml", "Documents" },
        { ".md", "Documents" },
        { ".html", "Documents" },
        { ".htm", "Documents" },
        { ".ahk", "Documents" },
        { ".js", "Documents" },
        { ".css", "Documents" },
        { ".ts", "Documents" },
        { ".java", "Documents" },
        { ".py", "Documents" },
        { ".c", "Documents" },
        { ".cpp", "Documents" },
        { ".h", "Documents" },
        { ".sh", "Documents" },

        { ".exe", "Executables" },
        { ".msi", "Executables" },
        { ".cmd", "Executables" },
        { ".bat", "Executables" },
        { ".apk", "Executables" },
        { ".com", "Executables" },

        { ".jar", "JARs" },

        { ".zip", "Archives" },
        { ".rar", "Archives" },
        { ".gz", "Archives" },
        { ".7z", "Archives" },
        { ".iso", "Archives" }




    };


    static List<string> FolderNames = new List<string>
    {
        "images", "Music", "Videos", "Documents", "Executables", "JARs", "Archives"

    };



    static void Main(string[] args)
    {
        
        Console.Title = "File Organizer B 1.1";
        string userName = Environment.UserName; 
        string path2 = "";
        
        while (true)
        {
            Console.WriteLine("Enter a folder path: ");
            path2 = Console.ReadLine()?.Trim().ToLower();

            if (Directory.Exists(path2))
            {
                break; // exits the loop
            }
            else
            {
                
                if (path2.Equals("downloads")) { 
                    path2 = $@"C:\users\{userName}\Downloads";
                    break;
                }
                if (path2.Equals("desktop"))
                {
                    path2 = $@"C:\users\{userName}\Desktop";
                    break;
                }
                if (path2.Equals("videos"))
                {
                    path2 = $@"C:\users\{userName}\Videos";
                    Console.WriteLine(path2);
                    break;
                }

                if (path2.Equals("documents"))
                {
                    path2 = $@"C:\users\{userName}\Documents";
                    Console.WriteLine(path2);
                    break;
                }
                if (path2.Equals("pictures"))
                {
                    path2 = $@"C:\users\{userName}\Pictures";
                    Console.WriteLine(path2);
                    break;
                }
                if (path2.Equals("music"))
                {
                    path2 = $@"C:\users\{userName}\Music";
                    break;
                }

                else
                {
                    Console.WriteLine("Invalid path.\n");
                }

            }
        }

        Console.WriteLine("Cleaning path...");

        
        string[] files = Directory.GetFiles(path2);

        foreach (string filepath in files)
        {
            string extension = Path.GetExtension(filepath).ToLower();



            if (folderType.ContainsKey(extension))
            {


                string folderNames = folderType[extension];
                string targetFolder = Path.Combine(path2, folderNames);
                string fileName = Path.GetFileName(filepath);
                string destPath = Path.Combine(targetFolder, fileName);


                try
                {

                    if (!Directory.Exists(targetFolder))
                    {
                        Directory.CreateDirectory(targetFolder);
                    }


                    File.Move(filepath, destPath);
                    Console.WriteLine($"moved {fileName} to {folderNames}");


                }
                catch (Exception e)
                {
                    Console.WriteLine($"Couldn'tt move {fileName}: {e.Message}");



                }


            }
        }


        Console.WriteLine("Moved files.");
        Console.WriteLine("App will auto close in 3 seconds.");
        Thread.Sleep(3000);
        
    }
}
