using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactFileUploadDemo.ViewModels;
using System.Text;

namespace ReactFileUploadDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageUploadController : ControllerBase
    {
        [HttpPost]
        [Route("Upload")]
        public void Upload(UploadViewModel viewModel)
        {
            string base64 = viewModel.Base64.Substring(viewModel.Base64.IndexOf(",") + 1);
            byte[] imageBytes = Convert.FromBase64String(base64);
            System.IO.File.WriteAllBytes($"uploads/{viewModel.Name}", imageBytes);
        }

        [HttpGet]
        [Route("view")]
        public IActionResult ViewImage(string name)
        {
            byte[] imageData = System.IO.File.ReadAllBytes($"uploads/{name}");
            //return File(imageData, "image/jpeg");
            return File(imageData, "application/octet-stream", name);
        }

        [HttpGet]
        [Route("getcsv")]
        public IActionResult GetCsv()
        {
            string csv = "Name,Age\n";
            csv += "John Doe,45\n";
            csv += "Bob Bobberson,67\n";

            return File(Encoding.UTF8.GetBytes(csv), "text/csv", "people.csv");
        }


    }
}
