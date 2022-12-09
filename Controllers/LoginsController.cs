using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LeaveApp.Context;
using LeaveApp.Models;

namespace LeaveApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginsController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public LoginsController(DataBaseContext context)
        {
            _context = context;
        }

        // GET: api/Logins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetLogin()
        {
            return await _context.Login.ToListAsync();
        }

       
        [HttpPost]
        public bool Login(Login login)
        {
            if (_context.Employees.Any(e => e.Email == login.Email && e.Password==login.Password))
            {
                _context.Login.Add(login);
                 _context.SaveChangesAsync();

                return true;
            }
            else
            {
                return false;
            }
           
        }

       
        private bool LoginExists(int id)
        {
            return _context.Login.Any(e => e.Id == id);
        }
    }
}
