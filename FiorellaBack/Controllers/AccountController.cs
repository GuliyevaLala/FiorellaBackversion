using FiorellaBack.ViewModels;
using FiorelloBack.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterVM register)
        {
            if (!ModelState.IsValid) return View();
            AppUser user = new AppUser
            {
                Fullname = register.Fullname,
                UserName = register.Username,
                Email = register.Email
            };

            if (!register.Terms)
            {
                ModelState.AddModelError("Terms", "Please check this field to scam you");
                return View();
            }
            IdentityResult result = await _userManager.CreateAsync(user, register.Password);
            if (!result.Succeeded)
            {
                foreach (IdentityError error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
                return View();
            }
            await _userManager.AddToRoleAsync(user, "Member");


            return RedirectToAction("Index", "Home");

        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginVM login)
        {
            if (!ModelState.IsValid) return View();

            AppUser user = await _userManager.FindByNameAsync(login.Username);

            if (user == null)
            {
                ModelState.AddModelError("", "Username or password is incorrect");
                return View();
            }
            Microsoft.AspNetCore.Identity.SignInResult result = await _signInManager.PasswordSignInAsync(user.UserName, login.Password, login.KeepMeSigned, true);
            if (!result.Succeeded)
            {
                if (result.IsLockedOut)
                {
                    ModelState.AddModelError("", "Your account has been blocked for 5 minutes due to overtrying");
                    return View();
                }
                ModelState.AddModelError("", "Username or password is incorrect");
                return View();

            }

            return RedirectToAction("index", "home");
        }
    }

}
